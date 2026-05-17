import { DynamoDBClient, QueryCommand, PutItemCommand } from '@aws-sdk/client-dynamodb';

const ddb = new DynamoDBClient({});
const TABLE = process.env.TABLE_NAME;
const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const resp = (status, body) => ({ statusCode: status, headers: CORS, body: JSON.stringify(body) });

function fromDDB(item) {
  const out = {};
  for (const [k, v] of Object.entries(item)) {
    if (v.S !== undefined) out[k] = v.S;
    else if (v.N !== undefined) out[k] = Number(v.N);
  }
  return out;
}

export const handler = async (event) => {
  const method = event.requestContext?.http?.method;
  const path   = event.requestContext?.http?.path;

  try {
    if (method === 'GET' && path === '/scores') {
      const result = await ddb.send(new QueryCommand({
        TableName: TABLE,
        KeyConditionExpression: 'pk = :pk',
        ExpressionAttributeValues: { ':pk': { S: 'LEADERBOARD' } },
        ScanIndexForward: false,
        Limit: 20,
      }));
      return resp(200, (result.Items || []).map(fromDDB));
    }

    if (method === 'POST' && path === '/scores') {
      const b = JSON.parse(event.body || '{}');
      const { name, score, mode, correct, streak, difficulty } = b;
      if (!name || typeof score !== 'number' || score < 0 || score > 99999) {
        return resp(400, { error: 'invalid payload' });
      }
      const sk = `${String(Math.floor(score)).padStart(8, '0')}#${Date.now()}`;
      const safeName = String(name).replace(/[<>&"]/g, '').trim().slice(0, 20) || 'Anonymous';
      await ddb.send(new PutItemCommand({
        TableName: TABLE,
        Item: {
          pk:         { S: 'LEADERBOARD' },
          sk:         { S: sk },
          name:       { S: safeName },
          score:      { N: String(Math.floor(score)) },
          mode:       { S: String(mode || '') },
          correct:    { N: String(Number(correct) || 0) },
          streak:     { N: String(Number(streak) || 0) },
          difficulty: { S: String(difficulty || '') },
          ts:         { N: String(Date.now()) },
        },
      }));
      return resp(201, { ok: true });
    }
  } catch (e) {
    console.error(e);
    return resp(500, { error: 'server error' });
  }

  return resp(404, { error: 'not found' });
};
