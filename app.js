const DATA = [
  {name:"Afghanistan",capital:"Kabul",flag:"🇦🇫",iso:4,region:"Asia"},
  {name:"Albania",capital:"Tirana",flag:"🇦🇱",iso:8,region:"Europe"},
  {name:"Algeria",capital:"Algiers",flag:"🇩🇿",iso:12,region:"Africa"},
  {name:"Andorra",capital:"Andorra la Vella",flag:"🇦🇩",iso:20,region:"Europe"},
  {name:"Angola",capital:"Luanda",flag:"🇦🇴",iso:24,region:"Africa"},
  {name:"Argentina",capital:"Buenos Aires",flag:"🇦🇷",iso:32,region:"Americas"},
  {name:"Armenia",capital:"Yerevan",flag:"🇦🇲",iso:51,region:"Asia"},
  {name:"Australia",capital:"Canberra",flag:"🇦🇺",iso:36,region:"Oceania"},
  {name:"Austria",capital:"Vienna",flag:"🇦🇹",iso:40,region:"Europe"},
  {name:"Azerbaijan",capital:"Baku",flag:"🇦🇿",iso:31,region:"Asia"},
  {name:"Bahamas",capital:"Nassau",flag:"🇧🇸",iso:44,region:"Americas"},
  {name:"Bahrain",capital:"Manama",flag:"🇧🇭",iso:48,region:"Asia"},
  {name:"Bangladesh",capital:"Dhaka",flag:"🇧🇩",iso:50,region:"Asia"},
  {name:"Barbados",capital:"Bridgetown",flag:"🇧🇧",iso:52,region:"Americas"},
  {name:"Belarus",capital:"Minsk",flag:"🇧🇾",iso:112,region:"Europe"},
  {name:"Belgium",capital:"Brussels",flag:"🇧🇪",iso:56,region:"Europe"},
  {name:"Belize",capital:"Belmopan",flag:"🇧🇿",iso:84,region:"Americas"},
  {name:"Benin",capital:"Porto-Novo",flag:"🇧🇯",iso:204,region:"Africa"},
  {name:"Bhutan",capital:"Thimphu",flag:"🇧🇹",iso:64,region:"Asia"},
  {name:"Bolivia",capital:"Sucre",flag:"🇧🇴",iso:68,region:"Americas"},
  {name:"Bosnia & Herzegovina",capital:"Sarajevo",flag:"🇧🇦",iso:70,region:"Europe"},
  {name:"Botswana",capital:"Gaborone",flag:"🇧🇼",iso:72,region:"Africa"},
  {name:"Brazil",capital:"Brasília",flag:"🇧🇷",iso:76,region:"Americas"},
  {name:"Brunei",capital:"Bandar Seri Begawan",flag:"🇧🇳",iso:96,region:"Asia"},
  {name:"Bulgaria",capital:"Sofia",flag:"🇧🇬",iso:100,region:"Europe"},
  {name:"Burkina Faso",capital:"Ouagadougou",flag:"🇧🇫",iso:854,region:"Africa"},
  {name:"Burundi",capital:"Gitega",flag:"🇧🇮",iso:108,region:"Africa"},
  {name:"Cabo Verde",capital:"Praia",flag:"🇨🇻",iso:132,region:"Africa"},
  {name:"Cambodia",capital:"Phnom Penh",flag:"🇰🇭",iso:116,region:"Asia"},
  {name:"Cameroon",capital:"Yaoundé",flag:"🇨🇲",iso:120,region:"Africa"},
  {name:"Canada",capital:"Ottawa",flag:"🇨🇦",iso:124,region:"Americas"},
  {name:"Central African Republic",capital:"Bangui",flag:"🇨🇫",iso:140,region:"Africa"},
  {name:"Chad",capital:"N'Djamena",flag:"🇹🇩",iso:148,region:"Africa"},
  {name:"Chile",capital:"Santiago",flag:"🇨🇱",iso:152,region:"Americas"},
  {name:"China",capital:"Beijing",flag:"🇨🇳",iso:156,region:"Asia"},
  {name:"Colombia",capital:"Bogotá",flag:"🇨🇴",iso:170,region:"Americas"},
  {name:"Comoros",capital:"Moroni",flag:"🇰🇲",iso:174,region:"Africa"},
  {name:"Congo (Republic)",capital:"Brazzaville",flag:"🇨🇬",iso:178,region:"Africa"},
  {name:"Congo (DR)",capital:"Kinshasa",flag:"🇨🇩",iso:180,region:"Africa"},
  {name:"Costa Rica",capital:"San José",flag:"🇨🇷",iso:188,region:"Americas"},
  {name:"Croatia",capital:"Zagreb",flag:"🇭🇷",iso:191,region:"Europe"},
  {name:"Cuba",capital:"Havana",flag:"🇨🇺",iso:192,region:"Americas"},
  {name:"Cyprus",capital:"Nicosia",flag:"🇨🇾",iso:196,region:"Europe"},
  {name:"Czech Republic",capital:"Prague",flag:"🇨🇿",iso:203,region:"Europe"},
  {name:"Denmark",capital:"Copenhagen",flag:"🇩🇰",iso:208,region:"Europe"},
  {name:"Djibouti",capital:"Djibouti City",flag:"🇩🇯",iso:262,region:"Africa"},
  {name:"Dominican Republic",capital:"Santo Domingo",flag:"🇩🇴",iso:214,region:"Americas"},
  {name:"Ecuador",capital:"Quito",flag:"🇪🇨",iso:218,region:"Americas"},
  {name:"Egypt",capital:"Cairo",flag:"🇪🇬",iso:818,region:"Africa"},
  {name:"El Salvador",capital:"San Salvador",flag:"🇸🇻",iso:222,region:"Americas"},
  {name:"Equatorial Guinea",capital:"Malabo",flag:"🇬🇶",iso:226,region:"Africa"},
  {name:"Eritrea",capital:"Asmara",flag:"🇪🇷",iso:232,region:"Africa"},
  {name:"Estonia",capital:"Tallinn",flag:"🇪🇪",iso:233,region:"Europe"},
  {name:"Eswatini",capital:"Mbabane",flag:"🇸🇿",iso:748,region:"Africa"},
  {name:"Ethiopia",capital:"Addis Ababa",flag:"🇪🇹",iso:231,region:"Africa"},
  {name:"Fiji",capital:"Suva",flag:"🇫🇯",iso:242,region:"Oceania"},
  {name:"Finland",capital:"Helsinki",flag:"🇫🇮",iso:246,region:"Europe"},
  {name:"France",capital:"Paris",flag:"🇫🇷",iso:250,region:"Europe"},
  {name:"Gabon",capital:"Libreville",flag:"🇬🇦",iso:266,region:"Africa"},
  {name:"Gambia",capital:"Banjul",flag:"🇬🇲",iso:270,region:"Africa"},
  {name:"Georgia",capital:"Tbilisi",flag:"🇬🇪",iso:268,region:"Asia"},
  {name:"Germany",capital:"Berlin",flag:"🇩🇪",iso:276,region:"Europe"},
  {name:"Ghana",capital:"Accra",flag:"🇬🇭",iso:288,region:"Africa"},
  {name:"Greece",capital:"Athens",flag:"🇬🇷",iso:300,region:"Europe"},
  {name:"Guatemala",capital:"Guatemala City",flag:"🇬🇹",iso:320,region:"Americas"},
  {name:"Guinea",capital:"Conakry",flag:"🇬🇳",iso:324,region:"Africa"},
  {name:"Guinea-Bissau",capital:"Bissau",flag:"🇬🇼",iso:624,region:"Africa"},
  {name:"Guyana",capital:"Georgetown",flag:"🇬🇾",iso:328,region:"Americas"},
  {name:"Haiti",capital:"Port-au-Prince",flag:"🇭🇹",iso:332,region:"Americas"},
  {name:"Honduras",capital:"Tegucigalpa",flag:"🇭🇳",iso:340,region:"Americas"},
  {name:"Hungary",capital:"Budapest",flag:"🇭🇺",iso:348,region:"Europe"},
  {name:"Iceland",capital:"Reykjavík",flag:"🇮🇸",iso:352,region:"Europe"},
  {name:"India",capital:"New Delhi",flag:"🇮🇳",iso:356,region:"Asia"},
  {name:"Indonesia",capital:"Jakarta",flag:"🇮🇩",iso:360,region:"Asia"},
  {name:"Iran",capital:"Tehran",flag:"🇮🇷",iso:364,region:"Asia"},
  {name:"Iraq",capital:"Baghdad",flag:"🇮🇶",iso:368,region:"Asia"},
  {name:"Ireland",capital:"Dublin",flag:"🇮🇪",iso:372,region:"Europe"},
  {name:"Israel",capital:"Jerusalem",flag:"🇮🇱",iso:376,region:"Asia"},
  {name:"Italy",capital:"Rome",flag:"🇮🇹",iso:380,region:"Europe"},
  {name:"Ivory Coast",capital:"Yamoussoukro",flag:"🇨🇮",iso:384,region:"Africa"},
  {name:"Jamaica",capital:"Kingston",flag:"🇯🇲",iso:388,region:"Americas"},
  {name:"Japan",capital:"Tokyo",flag:"🇯🇵",iso:392,region:"Asia"},
  {name:"Jordan",capital:"Amman",flag:"🇯🇴",iso:400,region:"Asia"},
  {name:"Kazakhstan",capital:"Astana",flag:"🇰🇿",iso:398,region:"Asia"},
  {name:"Kenya",capital:"Nairobi",flag:"🇰🇪",iso:404,region:"Africa"},
  {name:"Kuwait",capital:"Kuwait City",flag:"🇰🇼",iso:414,region:"Asia"},
  {name:"Kyrgyzstan",capital:"Bishkek",flag:"🇰🇬",iso:417,region:"Asia"},
  {name:"Laos",capital:"Vientiane",flag:"🇱🇦",iso:418,region:"Asia"},
  {name:"Latvia",capital:"Riga",flag:"🇱🇻",iso:428,region:"Europe"},
  {name:"Lebanon",capital:"Beirut",flag:"🇱🇧",iso:422,region:"Asia"},
  {name:"Lesotho",capital:"Maseru",flag:"🇱🇸",iso:426,region:"Africa"},
  {name:"Liberia",capital:"Monrovia",flag:"🇱🇷",iso:430,region:"Africa"},
  {name:"Libya",capital:"Tripoli",flag:"🇱🇾",iso:434,region:"Africa"},
  {name:"Liechtenstein",capital:"Vaduz",flag:"🇱🇮",iso:438,region:"Europe"},
  {name:"Lithuania",capital:"Vilnius",flag:"🇱🇹",iso:440,region:"Europe"},
  {name:"Luxembourg",capital:"Luxembourg City",flag:"🇱🇺",iso:442,region:"Europe"},
  {name:"Madagascar",capital:"Antananarivo",flag:"🇲🇬",iso:450,region:"Africa"},
  {name:"Malawi",capital:"Lilongwe",flag:"🇲🇼",iso:454,region:"Africa"},
  {name:"Malaysia",capital:"Kuala Lumpur",flag:"🇲🇾",iso:458,region:"Asia"},
  {name:"Maldives",capital:"Malé",flag:"🇲🇻",iso:462,region:"Asia"},
  {name:"Mali",capital:"Bamako",flag:"🇲🇱",iso:466,region:"Africa"},
  {name:"Malta",capital:"Valletta",flag:"🇲🇹",iso:470,region:"Europe"},
  {name:"Mauritania",capital:"Nouakchott",flag:"🇲🇷",iso:478,region:"Africa"},
  {name:"Mauritius",capital:"Port Louis",flag:"🇲🇺",iso:480,region:"Africa"},
  {name:"Mexico",capital:"Mexico City",flag:"🇲🇽",iso:484,region:"Americas"},
  {name:"Moldova",capital:"Chișinău",flag:"🇲🇩",iso:498,region:"Europe"},
  {name:"Mongolia",capital:"Ulaanbaatar",flag:"🇲🇳",iso:496,region:"Asia"},
  {name:"Montenegro",capital:"Podgorica",flag:"🇲🇪",iso:499,region:"Europe"},
  {name:"Morocco",capital:"Rabat",flag:"🇲🇦",iso:504,region:"Africa"},
  {name:"Mozambique",capital:"Maputo",flag:"🇲🇿",iso:508,region:"Africa"},
  {name:"Myanmar",capital:"Naypyidaw",flag:"🇲🇲",iso:104,region:"Asia"},
  {name:"Namibia",capital:"Windhoek",flag:"🇳🇦",iso:516,region:"Africa"},
  {name:"Nepal",capital:"Kathmandu",flag:"🇳🇵",iso:524,region:"Asia"},
  {name:"Netherlands",capital:"Amsterdam",flag:"🇳🇱",iso:528,region:"Europe"},
  {name:"New Zealand",capital:"Wellington",flag:"🇳🇿",iso:554,region:"Oceania"},
  {name:"Nicaragua",capital:"Managua",flag:"🇳🇮",iso:558,region:"Americas"},
  {name:"Niger",capital:"Niamey",flag:"🇳🇪",iso:562,region:"Africa"},
  {name:"Nigeria",capital:"Abuja",flag:"🇳🇬",iso:566,region:"Africa"},
  {name:"North Korea",capital:"Pyongyang",flag:"🇰🇵",iso:408,region:"Asia"},
  {name:"North Macedonia",capital:"Skopje",flag:"🇲🇰",iso:807,region:"Europe"},
  {name:"Norway",capital:"Oslo",flag:"🇳🇴",iso:578,region:"Europe"},
  {name:"Oman",capital:"Muscat",flag:"🇴🇲",iso:512,region:"Asia"},
  {name:"Pakistan",capital:"Islamabad",flag:"🇵🇰",iso:586,region:"Asia"},
  {name:"Panama",capital:"Panama City",flag:"🇵🇦",iso:591,region:"Americas"},
  {name:"Papua New Guinea",capital:"Port Moresby",flag:"🇵🇬",iso:598,region:"Oceania"},
  {name:"Paraguay",capital:"Asunción",flag:"🇵🇾",iso:600,region:"Americas"},
  {name:"Peru",capital:"Lima",flag:"🇵🇪",iso:604,region:"Americas"},
  {name:"Philippines",capital:"Manila",flag:"🇵🇭",iso:608,region:"Asia"},
  {name:"Poland",capital:"Warsaw",flag:"🇵🇱",iso:616,region:"Europe"},
  {name:"Portugal",capital:"Lisbon",flag:"🇵🇹",iso:620,region:"Europe"},
  {name:"Qatar",capital:"Doha",flag:"🇶🇦",iso:634,region:"Asia"},
  {name:"Romania",capital:"Bucharest",flag:"🇷🇴",iso:642,region:"Europe"},
  {name:"Russia",capital:"Moscow",flag:"🇷🇺",iso:643,region:"Europe"},
  {name:"Rwanda",capital:"Kigali",flag:"🇷🇼",iso:646,region:"Africa"},
  {name:"Saudi Arabia",capital:"Riyadh",flag:"🇸🇦",iso:682,region:"Asia"},
  {name:"Senegal",capital:"Dakar",flag:"🇸🇳",iso:686,region:"Africa"},
  {name:"Serbia",capital:"Belgrade",flag:"🇷🇸",iso:688,region:"Europe"},
  {name:"Sierra Leone",capital:"Freetown",flag:"🇸🇱",iso:694,region:"Africa"},
  {name:"Singapore",capital:"Singapore",flag:"🇸🇬",iso:702,region:"Asia"},
  {name:"Slovakia",capital:"Bratislava",flag:"🇸🇰",iso:703,region:"Europe"},
  {name:"Slovenia",capital:"Ljubljana",flag:"🇸🇮",iso:705,region:"Europe"},
  {name:"Solomon Islands",capital:"Honiara",flag:"🇸🇧",iso:90,region:"Oceania"},
  {name:"Somalia",capital:"Mogadishu",flag:"🇸🇴",iso:706,region:"Africa"},
  {name:"South Africa",capital:"Pretoria",flag:"🇿🇦",iso:710,region:"Africa"},
  {name:"South Korea",capital:"Seoul",flag:"🇰🇷",iso:410,region:"Asia"},
  {name:"South Sudan",capital:"Juba",flag:"🇸🇸",iso:728,region:"Africa"},
  {name:"Spain",capital:"Madrid",flag:"🇪🇸",iso:724,region:"Europe"},
  {name:"Sri Lanka",capital:"Sri Jayawardenepura Kotte",flag:"🇱🇰",iso:144,region:"Asia"},
  {name:"Sudan",capital:"Khartoum",flag:"🇸🇩",iso:729,region:"Africa"},
  {name:"Suriname",capital:"Paramaribo",flag:"🇸🇷",iso:740,region:"Americas"},
  {name:"Sweden",capital:"Stockholm",flag:"🇸🇪",iso:752,region:"Europe"},
  {name:"Switzerland",capital:"Bern",flag:"🇨🇭",iso:756,region:"Europe"},
  {name:"Syria",capital:"Damascus",flag:"🇸🇾",iso:760,region:"Asia"},
  {name:"Taiwan",capital:"Taipei",flag:"🇹🇼",iso:158,region:"Asia"},
  {name:"Tajikistan",capital:"Dushanbe",flag:"🇹🇯",iso:762,region:"Asia"},
  {name:"Tanzania",capital:"Dodoma",flag:"🇹🇿",iso:834,region:"Africa"},
  {name:"Thailand",capital:"Bangkok",flag:"🇹🇭",iso:764,region:"Asia"},
  {name:"Timor-Leste",capital:"Dili",flag:"🇹🇱",iso:626,region:"Asia"},
  {name:"Togo",capital:"Lomé",flag:"🇹🇬",iso:768,region:"Africa"},
  {name:"Trinidad & Tobago",capital:"Port of Spain",flag:"🇹🇹",iso:780,region:"Americas"},
  {name:"Tunisia",capital:"Tunis",flag:"🇹🇳",iso:788,region:"Africa"},
  {name:"Turkey",capital:"Ankara",flag:"🇹🇷",iso:792,region:"Asia"},
  {name:"Turkmenistan",capital:"Ashgabat",flag:"🇹🇲",iso:795,region:"Asia"},
  {name:"Uganda",capital:"Kampala",flag:"🇺🇬",iso:800,region:"Africa"},
  {name:"Ukraine",capital:"Kyiv",flag:"🇺🇦",iso:804,region:"Europe"},
  {name:"United Arab Emirates",capital:"Abu Dhabi",flag:"🇦🇪",iso:784,region:"Asia"},
  {name:"United Kingdom",capital:"London",flag:"🇬🇧",iso:826,region:"Europe"},
  {name:"United States",capital:"Washington D.C.",flag:"🇺🇸",iso:840,region:"Americas"},
  {name:"Uruguay",capital:"Montevideo",flag:"🇺🇾",iso:858,region:"Americas"},
  {name:"Uzbekistan",capital:"Tashkent",flag:"🇺🇿",iso:860,region:"Asia"},
  {name:"Venezuela",capital:"Caracas",flag:"🇻🇪",iso:862,region:"Americas"},
  {name:"Vietnam",capital:"Hanoi",flag:"🇻🇳",iso:704,region:"Asia"},
  {name:"Yemen",capital:"Sana'a",flag:"🇾🇪",iso:887,region:"Asia"},
  {name:"Zambia",capital:"Lusaka",flag:"🇿🇲",iso:894,region:"Africa"},
  {name:"Zimbabwe",capital:"Harare",flag:"🇿🇼",iso:716,region:"Africa"}
];

const SUBREGION = {
  "Algeria":"North Africa","Egypt":"North Africa","Libya":"North Africa","Morocco":"North Africa","Tunisia":"North Africa","Sudan":"Northeast Africa",
  "Benin":"West Africa","Burkina Faso":"West Africa","Cabo Verde":"West Africa","Gambia":"West Africa","Ghana":"West Africa","Guinea":"West Africa",
  "Guinea-Bissau":"West Africa","Ivory Coast":"West Africa","Liberia":"West Africa","Mali":"West Africa","Mauritania":"West Africa","Niger":"West Africa",
  "Nigeria":"West Africa","Senegal":"West Africa","Sierra Leone":"West Africa","Togo":"West Africa",
  "Cameroon":"Central Africa","Central African Republic":"Central Africa","Chad":"Central Africa","Congo (Republic)":"Central Africa",
  "Congo (DR)":"Central Africa","Equatorial Guinea":"Central Africa","Gabon":"Central Africa",
  "Burundi":"East Africa","Comoros":"East Africa","Djibouti":"East Africa","Eritrea":"East Africa","Ethiopia":"East Africa","Kenya":"East Africa",
  "Madagascar":"East Africa","Mauritius":"East Africa","Rwanda":"East Africa","Somalia":"East Africa","South Sudan":"East Africa","Tanzania":"East Africa","Uganda":"East Africa",
  "Angola":"Southern Africa","Botswana":"Southern Africa","Eswatini":"Southern Africa","Lesotho":"Southern Africa","Malawi":"Southern Africa",
  "Mozambique":"Southern Africa","Namibia":"Southern Africa","South Africa":"Southern Africa","Zambia":"Southern Africa","Zimbabwe":"Southern Africa",
  "Denmark":"Northern Europe","Estonia":"Northern Europe","Finland":"Northern Europe","Iceland":"Northern Europe","Latvia":"Northern Europe",
  "Lithuania":"Northern Europe","Norway":"Northern Europe","Sweden":"Northern Europe",
  "Andorra":"Western Europe","Austria":"Western Europe","Belgium":"Western Europe","France":"Western Europe","Germany":"Western Europe",
  "Ireland":"Western Europe","Liechtenstein":"Western Europe","Luxembourg":"Western Europe","Netherlands":"Western Europe","Switzerland":"Western Europe","United Kingdom":"Western Europe",
  "Croatia":"Southern Europe","Cyprus":"Southern Europe","Greece":"Southern Europe","Italy":"Southern Europe","Malta":"Southern Europe",
  "Montenegro":"Southern Europe","Portugal":"Southern Europe","Slovenia":"Southern Europe","Spain":"Southern Europe",
  "Albania":"Southeast Europe","Bosnia & Herzegovina":"Southeast Europe","North Macedonia":"Southeast Europe","Serbia":"Southeast Europe",
  "Belarus":"Eastern Europe","Bulgaria":"Eastern Europe","Czech Republic":"Eastern Europe","Hungary":"Eastern Europe","Moldova":"Eastern Europe",
  "Poland":"Eastern Europe","Romania":"Eastern Europe","Russia":"Eastern Europe","Slovakia":"Eastern Europe","Ukraine":"Eastern Europe",
  "Bahrain":"Middle East","Iraq":"Middle East","Israel":"Middle East","Jordan":"Middle East","Kuwait":"Middle East","Lebanon":"Middle East",
  "Oman":"Middle East","Qatar":"Middle East","Saudi Arabia":"Middle East","Syria":"Middle East","United Arab Emirates":"Middle East","Yemen":"Middle East",
  "Afghanistan":"South Asia","Bangladesh":"South Asia","Bhutan":"South Asia","India":"South Asia","Maldives":"South Asia","Nepal":"South Asia","Pakistan":"South Asia","Sri Lanka":"South Asia",
  "Brunei":"Southeast Asia","Cambodia":"Southeast Asia","Indonesia":"Southeast Asia","Laos":"Southeast Asia","Malaysia":"Southeast Asia","Myanmar":"Southeast Asia",
  "Philippines":"Southeast Asia","Singapore":"Southeast Asia","Thailand":"Southeast Asia","Timor-Leste":"Southeast Asia","Vietnam":"Southeast Asia",
  "China":"East Asia","Japan":"East Asia","Mongolia":"East Asia","North Korea":"East Asia","South Korea":"East Asia","Taiwan":"East Asia",
  "Kazakhstan":"Central Asia","Kyrgyzstan":"Central Asia","Tajikistan":"Central Asia","Turkmenistan":"Central Asia","Uzbekistan":"Central Asia",
  "Armenia":"Caucasus","Azerbaijan":"Caucasus","Georgia":"Caucasus",
  "Canada":"North America","Mexico":"North America","United States":"North America",
  "Belize":"Central America","Costa Rica":"Central America","El Salvador":"Central America","Guatemala":"Central America",
  "Honduras":"Central America","Nicaragua":"Central America","Panama":"Central America",
  "Bahamas":"Caribbean","Barbados":"Caribbean","Cuba":"Caribbean","Dominican Republic":"Caribbean","Haiti":"Caribbean","Jamaica":"Caribbean","Trinidad & Tobago":"Caribbean",
  "Argentina":"South America","Bolivia":"South America","Brazil":"South America","Chile":"South America","Colombia":"South America","Ecuador":"South America",
  "Guyana":"South America","Paraguay":"South America","Peru":"South America","Suriname":"South America","Uruguay":"South America","Venezuela":"South America",
  "Australia":"Australasia","New Zealand":"Australasia","Fiji":"Pacific Islands","Papua New Guinea":"Pacific Islands","Solomon Islands":"Pacific Islands"
};

const LANDLOCKED = new Set([
  "Afghanistan","Andorra","Armenia","Austria","Belarus","Bhutan","Bolivia","Botswana","Burkina Faso","Burundi",
  "Central African Republic","Chad","Czech Republic","Eswatini","Ethiopia","Hungary","Kazakhstan","Kyrgyzstan",
  "Laos","Lesotho","Liechtenstein","Luxembourg","Malawi","Mali","Moldova","Mongolia","Nepal","Niger",
  "North Macedonia","Paraguay","Rwanda","Serbia","Slovakia","South Sudan","Switzerland","Tajikistan",
  "Turkmenistan","Uganda","Uzbekistan","Zambia","Zimbabwe"
]);

const ISLAND_NATION = new Set([
  "Australia","Bahamas","Bahrain","Barbados","Cabo Verde","Comoros","Cuba","Cyprus","Dominican Republic",
  "Fiji","Haiti","Iceland","Indonesia","Ireland","Jamaica","Japan","Madagascar","Maldives","Malta",
  "Mauritius","New Zealand","Papua New Guinea","Philippines","Singapore","Solomon Islands","Sri Lanka",
  "Taiwan","Timor-Leste","Trinidad & Tobago","United Kingdom"
]);

const EASY_COUNTRIES = new Set([
  "Argentina","Australia","Belgium","Brazil","Canada","Chile","China","Colombia","Cuba","Denmark",
  "Egypt","France","Germany","Greece","India","Indonesia","Iran","Ireland","Israel","Italy",
  "Jamaica","Japan","Mexico","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Peru",
  "Philippines","Poland","Portugal","Russia","Saudi Arabia","South Africa","South Korea","Spain",
  "Sweden","Switzerland","Thailand","Turkey","Ukraine","United Kingdom","United States","Vietnam"
]);

const MEDIUM_COUNTRIES = new Set([
  "Afghanistan","Algeria","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bangladesh","Belarus","Belgium","Bolivia","Bosnia & Herzegovina","Brazil","Bulgaria",
  "Cambodia","Cameroon","Canada","Chile","China","Colombia","Congo (DR)","Costa Rica",
  "Croatia","Cuba","Czech Republic","Denmark","Dominican Republic","Ecuador","Egypt",
  "El Salvador","Estonia","Ethiopia","Finland","France","Georgia","Germany","Ghana",
  "Greece","Guatemala","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran",
  "Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya",
  "Kuwait","Latvia","Lebanon","Libya","Lithuania","Malaysia","Mexico","Moldova","Mongolia",
  "Morocco","Mozambique","Myanmar","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria",
  "North Korea","Norway","Oman","Pakistan","Panama","Paraguay","Peru","Philippines","Poland",
  "Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Slovakia",
  "South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland","Syria",
  "Taiwan","Tanzania","Thailand","Tunisia","Turkey","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen",
  "Zambia","Zimbabwe"
]);

// ── DERIVED ───────────────────────────────────────────────────────────────────
const ALL_CAPITALS = DATA.map(d => d.capital);
const ALL_NAMES    = DATA.map(d => d.name);

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const QUESTIONS = 20, LIVES = 3, HINTS = 3, BASE_PTS = 100, STREAK_BONUS = 50, HINT_PEN = 30;
const TIMER_SECS = { easy: 30, medium: 20, hard: 12 };

// ── SETTINGS ──────────────────────────────────────────────────────────────────
let settings = { difficulty: 'medium', region: 'all', timed: false, sound: true };
try { const s = JSON.parse(localStorage.getItem('geo_settings')); if (s) Object.assign(settings, s); } catch(e) {}

function saveSettings() { localStorage.setItem('geo_settings', JSON.stringify(settings)); }

function getPool() {
  let pool = settings.region !== 'all' ? DATA.filter(c => c.region === settings.region) : [...DATA];
  if (settings.difficulty === 'easy')        pool = pool.filter(c => EASY_COUNTRIES.has(c.name));
  else if (settings.difficulty === 'medium') pool = pool.filter(c => MEDIUM_COUNTRIES.has(c.name));
  return pool.length >= 4 ? pool : [...DATA];
}

// ── SFX ───────────────────────────────────────────────────────────────────────
const SFX = (() => {
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }
  function tone(freq, type, start, dur, vol = 0.25) {
    try {
      const ac = getCtx();
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain); gain.connect(ac.destination);
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, ac.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + start + dur);
      osc.start(ac.currentTime + start);
      osc.stop(ac.currentTime + start + dur + 0.02);
    } catch(e) {}
  }
  return {
    play(type) {
      if (!settings.sound) return;
      if (type === 'correct') {
        tone(523, 'sine', 0, 0.12); tone(659, 'sine', 0.1, 0.12); tone(784, 'sine', 0.2, 0.2);
      } else if (type === 'wrong') {
        tone(300, 'sawtooth', 0, 0.12, 0.2); tone(220, 'sawtooth', 0.1, 0.18, 0.15);
      } else if (type === 'streak') {
        tone(523, 'sine', 0, 0.08); tone(659, 'sine', 0.08, 0.08);
        tone(784, 'sine', 0.16, 0.08); tone(1047, 'sine', 0.24, 0.3);
      }
    }
  };
})();

// ── TIMER ─────────────────────────────────────────────────────────────────────
let timerRAF = null, timerGen = 0;

function startTimer(barId, wrapId, seconds, onExpire) {
  stopTimer();
  const gen   = ++timerGen;
  const total = seconds * 1000;
  const end   = performance.now() + total;
  document.getElementById(wrapId).style.display = 'block';

  function tick(now) {
    if (timerGen !== gen) return;
    const rem = end - now;
    if (rem <= 0) {
      document.getElementById(barId).style.width = '0%';
      if (onExpire) onExpire();
      return;
    }
    const pct = (rem / total) * 100;
    const bar = document.getElementById(barId);
    bar.style.width = pct + '%';
    bar.className = 'timer-bar' + (pct < 25 ? ' danger' : pct < 50 ? ' warn' : '');
    timerRAF = requestAnimationFrame(tick);
  }
  timerRAF = requestAnimationFrame(tick);
}

function stopTimer() {
  timerGen++;
  if (timerRAF) { cancelAnimationFrame(timerRAF); timerRAF = null; }
  document.querySelectorAll('.timer-wrap').forEach(w => w.style.display = 'none');
}

// ── GAME STATE ────────────────────────────────────────────────────────────────
let G = {};
let msvg, mg, mzoom, mapReady = false;
let lbScores = null, lbDiff = 'medium', lbMode = 'Map';

// ── UTILITIES ─────────────────────────────────────────────────────────────────
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  stopTimer();
  document.getElementById('rend').classList.remove('show');
  show('home');
  updateHomeSettings();
}

async function showLB() {
  show('leaderboard');
  updateLBChips();
  document.getElementById('lbt').innerHTML = '<div class="lbe">Loading…</div>';
  try {
    const res = await fetch(API + '/scores');
    lbScores = res.ok ? await res.json() : null;
  } catch (e) {
    lbScores = null;
  }
  renderLB();
}

function setLBDiff(d) {
  lbDiff = d;
  updateLBChips();
  renderLB();
}

function setLBMode(m) {
  lbMode = m;
  updateLBChips();
  renderLB();
}

function updateLBChips() {
  ['easy', 'medium', 'hard'].forEach(d =>
    document.getElementById(`lbd-${d}`)?.classList.toggle('active', d === lbDiff)
  );
  ['Map', 'Type', 'MC', 'Rev', 'Flag'].forEach(m =>
    document.getElementById(`lbm-${m}`)?.classList.toggle('active', m === lbMode)
  );
}

function toast(msg, duration = 2200) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function norm(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, '').trim();
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Shows a toast at streak milestones. Returns true if milestone was hit.
function checkStreakMilestone() {
  const s = G.streak;
  if (s === 5 || s === 10 || (s > 10 && s % 10 === 0)) {
    toast(s === 5 ? '🔥 5 STREAK!' : `⚡ ${s} STREAK!`, 1500);
    return true;
  }
  return false;
}

function playSFX(correct) {
  if (!correct) { SFX.play('wrong'); return; }
  SFX.play(checkStreakMilestone() ? 'streak' : 'correct');
}

// Single HUD updater for all three game modes.
// prefix: 'm' (map), 't' (type/reverse), 'mc' (multiple choice)
function updHUD(prefix) {
  const $ = id => document.getElementById(id);
  $(prefix + 's').textContent  = G.score;
  $(prefix + 'st').textContent = G.streak + (G.streak >= 3 ? '🔥' : '');
  $(prefix + 'l').textContent  = '❤️'.repeat(G.lives) + '🖤'.repeat(Math.max(0, LIVES - G.lives));
  if (prefix !== 'mc') {
    $(prefix + 'hl').textContent = G.hints;
    $(prefix + 'hb').disabled    = G.hints <= 0 || G.hused;
  }
}

// ── HOME SETTINGS ─────────────────────────────────────────────────────────────
const API = 'https://7bk6medhc2.execute-api.ap-southeast-2.amazonaws.com';

const DIFF_DESC = {
  easy:   'Famous capitals only · no timer · great for beginners',
  medium: 'Broader mix of countries · 20s timer',
  hard:   'All 185 countries · 12s timer · no mercy',
};

function setDiff(d) {
  settings.difficulty = d;
  saveSettings();
  ['easy','medium','hard'].forEach(v =>
    document.getElementById('diff-' + v).classList.toggle('active', v === d)
  );
  document.getElementById('diff-desc').textContent = DIFF_DESC[d];
}

function setRegion(v) { settings.region = v; saveSettings(); }

function toggleTimer() {
  settings.timed = !settings.timed;
  saveSettings();
  document.getElementById('timer-chip').classList.toggle('active', settings.timed);
}

function toggleSound() {
  settings.sound = !settings.sound;
  saveSettings();
  document.getElementById('sound-chip').classList.toggle('active', settings.sound);
}

function updateHomeSettings() {
  ['easy','medium','hard'].forEach(d =>
    document.getElementById('diff-' + d).classList.toggle('active', d === settings.difficulty)
  );
  document.getElementById('diff-desc').textContent = DIFF_DESC[settings.difficulty];
  document.getElementById('region-sel').value = settings.region;
  document.getElementById('timer-chip').classList.toggle('active', settings.timed);
  document.getElementById('sound-chip').classList.toggle('active', settings.sound);
}

// ── GAME START ────────────────────────────────────────────────────────────────
function startGame(mode) {
  const pool = getPool();
  const questions = shuffle(pool).slice(0, Math.min(QUESTIONS, pool.length));
  G = {
    mode, q: questions, qi: 0,
    score: 0, lives: LIVES, streak: 0, best: 0,
    hints: HINTS, correct: 0, hused: false, done: false,
    missed: [], correctMCIdx: 0
  };
  if (mode === 'map') {
    show('map-game');
    if (!mapReady) loadMap(); else nextMQ();
  } else if (mode === 'mc') {
    show('mc-game');
    nextMCQ();
  } else {
    show('type-game');
    nextTQ();
  }
}

// ── MAP MODE ──────────────────────────────────────────────────────────────────
async function loadMap() {
  const topo  = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r => r.json());
  const feats = topojson.feature(topo, topo.objects.countries).features;
  msvg = d3.select('#msvg');
  const wrap = document.getElementById('map-wrap');
  // Wait for layout to complete — service worker cache can resolve fetch instantly,
  // before the browser has reflowed the newly-visible flex container
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const rect = wrap.getBoundingClientRect();
  const W = rect.width || window.innerWidth;
  const H = rect.height || (window.innerHeight - rect.top);
  const sphere = { type: 'Sphere' };
  const proj = d3.geoNaturalEarth1().fitSize([W, H], sphere);
  const path = d3.geoPath().projection(proj);
  mg = msvg.append('g');
  mg.selectAll('path').data(feats).enter().append('path')
    .attr('class', 'cp')
    .attr('data-iso', d => +d.id)
    .attr('d', path)
    .on('click', function(_, d) { handleMapClick(+d.id, this); });
  mzoom = d3.zoom()
    .scaleExtent([1, 8])
    .translateExtent([[0, 0], [W, H]])
    .extent([[0, 0], [W, H]])
    .on('zoom', e => mg.attr('transform', e.transform));
  msvg.call(mzoom);
  mapReady = true;
  nextMQ();
}

function nextMQ() {
  if (G.qi >= G.q.length || G.lives <= 0) { endGame(); return; }
  G.hused = false;
  G.done  = false;
  const country = G.q[G.qi];
  document.getElementById('mqt').textContent = `${country.flag} ${country.name}`;
  document.getElementById('mqh').textContent = '';
  document.getElementById('mq').textContent  = `${G.qi + 1}/${G.q.length}`;
  d3.selectAll('.cp').classed('cf', false).classed('wf', false).classed('tr', false);
  document.getElementById('map-skip').disabled = false;
  updHUD('m');
  if (settings.timed && settings.difficulty !== 'easy') startTimer('map-timer', 'map-timer-wrap', TIMER_SECS[settings.difficulty], skipMap);
}

function handleMapClick(clickedIso, el) {
  if (G.done) return;
  G.done = true;
  stopTimer();
  const country = G.q[G.qi];
  if (clickedIso === country.iso) {
    const streakBonus = G.streak >= 3 ? STREAK_BONUS : 0;
    const hintPenalty = G.hused ? HINT_PEN : 0;
    const pts = Math.max(10, BASE_PTS + streakBonus - hintPenalty);
    G.score += pts; G.streak++; G.correct++;
    if (G.streak > G.best) G.best = G.streak;
    d3.select(el).classed('cf', true);
    showMapFeedback(G.streak >= 3 ? `🔥 ${pts} PTS!` : `✓ ${pts} PTS`, true);
    playSFX(true);
    updHUD('m');
    setTimeout(() => { G.qi++; nextMQ(); }, 1000);
  } else {
    G.missed.push(country);
    G.streak = 0; G.lives--;
    const clicked = DATA.find(d => d.iso === clickedIso);
    d3.select(el).classed('wf', true);
    d3.selectAll(`.cp[data-iso="${country.iso}"]`).classed('tr', true);
    showMapFeedback(clicked ? `✗ That's ${clicked.name}` : '✗ WRONG!', false);
    playSFX(false);
    updHUD('m');
    setTimeout(() => {
      d3.select(el).classed('wf', false);
      d3.selectAll(`.cp[data-iso="${country.iso}"]`).classed('tr', false);
      G.qi++;
      if (G.lives <= 0) endGame(); else nextMQ();
    }, 1300);
  }
}

function showMapFeedback(msg, ok) {
  const fb = document.getElementById('mfb');
  fb.textContent = msg;
  fb.style.background = ok ? 'var(--green)' : 'var(--red)';
  fb.classList.add('show');
  setTimeout(() => fb.classList.remove('show'), 900);
}

function mapHint() {
  if (G.hints <= 0 || G.hused) return;
  G.hints--; G.hused = true;
  const country = G.q[G.qi];
  const geoType = ISLAND_NATION.has(country.name) ? 'Island nation'
                : LANDLOCKED.has(country.name)    ? 'Landlocked country'
                : 'Coastal country';
  const hints = [
    `Continent: ${country.region}`,
    `Sub-region: ${SUBREGION[country.name] || country.region}`,
    geoType
  ];
  document.getElementById('mqh').textContent = `💡 ${hints[Math.floor(Math.random() * hints.length)]} (−${HINT_PEN} pts if correct)`;
  updHUD('m');
}

function skipMap() {
  if (G.done) return;
  G.done = true;
  stopTimer();
  G.streak = 0;
  const country = G.q[G.qi];
  G.missed.push(country);
  document.getElementById('map-skip').disabled = true;
  d3.selectAll(`.cp[data-iso="${country.iso}"]`).classed('tr', true);
  showMapFeedback(`📍 ${country.name}`, false);
  updHUD('m');
  setTimeout(() => {
    d3.selectAll('.cp').classed('tr', false);
    G.qi++; nextMQ();
  }, 1800);
}

// ── TYPE / REVERSE MODE ───────────────────────────────────────────────────────
function nextTQ() {
  if (G.qi >= G.q.length || G.lives <= 0) { endGame(); return; }
  G.hused = false;
  G.done  = false;
  const country = G.q[G.qi];
  const isReverse = G.mode === 'reverse';
  document.getElementById('type-rl').textContent   = isReverse ? 'Which country has this capital?' : 'What is the capital of…';
  document.getElementById('tflag').textContent     = isReverse ? '🌍' : country.flag;
  document.getElementById('tcname').textContent    = isReverse ? country.capital : country.name;
  document.getElementById('tcsub').textContent     = isReverse ? 'Capital city' : `Region: ${country.region}`;
  document.getElementById('type-hint').textContent = '';
  const inp = document.getElementById('type-in');
  inp.value = ''; inp.className = ''; inp.disabled = false;
  document.getElementById('type-fb').textContent = '';
  document.getElementById('type-fb').className   = '';
  document.getElementById('ac').style.display    = 'none';
  document.getElementById('tq').textContent      = `${G.qi + 1}/${G.q.length}`;
  document.getElementById('tprog').style.width   = `${(G.qi / G.q.length) * 100}%`;
  document.getElementById('sub-btn').textContent = 'SUBMIT →';
  document.getElementById('type-skip').disabled  = false;
  updHUD('t');
  setTimeout(() => inp.focus(), 50);
  if (settings.timed && settings.difficulty !== 'easy') startTimer('type-timer', 'type-timer-wrap', TIMER_SECS[settings.difficulty], skipType);
}

function submitType() {
  if (G.done) { G.qi++; nextTQ(); return; }
  const inp = document.getElementById('type-in');
  const val = inp.value.trim();
  if (!val) return;
  const country   = G.q[G.qi];
  const isReverse = G.mode === 'reverse';
  const target    = isReverse ? country.name : country.capital;
  const correct   = norm(val) === norm(target);
  G.done = true;
  stopTimer();
  inp.disabled = true;
  document.getElementById('ac').style.display = 'none';
  if (correct) {
    const streakBonus = G.streak >= 3 ? STREAK_BONUS : 0;
    const hintPenalty = G.hused ? HINT_PEN : 0;
    const pts = Math.max(10, BASE_PTS + streakBonus - hintPenalty);
    G.score += pts; G.streak++; G.correct++;
    if (G.streak > G.best) G.best = G.streak;
    inp.classList.add('ok');
    const fb = document.getElementById('type-fb');
    fb.textContent = G.streak >= 3 ? `🔥 Streak! +${pts} pts` : `✓ Correct! +${pts} pts`;
    fb.className = 'ok';
    playSFX(true);
  } else {
    G.missed.push(country);
    G.streak = 0; G.lives--;
    inp.classList.add('bad');
    inp.value = target;
    const fb = document.getElementById('type-fb');
    fb.textContent = `✗ It was: ${target}`; fb.className = 'bad';
    playSFX(false);
  }
  updHUD('t');
  document.getElementById('sub-btn').textContent = 'NEXT →';
  document.getElementById('type-skip').disabled  = true;
  if (G.lives <= 0) setTimeout(endGame, 1200);
}

function onTK(e) {
  if (e.key === 'Enter') submitType();
  if (e.key === 'Escape') document.getElementById('ac').style.display = 'none';
}

function onTI() {
  const val  = document.getElementById('type-in').value.trim().toLowerCase();
  const ac   = document.getElementById('ac');
  if (val.length < 2) { ac.style.display = 'none'; return; }
  const list = G.mode === 'reverse' ? ALL_NAMES : ALL_CAPITALS;
  const matches = list.filter(x => x.toLowerCase().startsWith(val)).slice(0, 6);
  if (!matches.length) { ac.style.display = 'none'; return; }
  ac.innerHTML = matches.map(v => `<div class="aci" data-val="${esc(v)}">${esc(v)}</div>`).join('');
  ac.style.display = 'block';
}

function skipType() {
  if (G.done) return;
  G.done = true;
  stopTimer();
  G.streak = 0;
  const country   = G.q[G.qi];
  const isReverse = G.mode === 'reverse';
  const target    = isReverse ? country.name : country.capital;
  G.missed.push(country);
  const inp = document.getElementById('type-in');
  inp.disabled = true;
  inp.value    = target;
  inp.classList.add('bad');
  document.getElementById('ac').style.display    = 'none';
  document.getElementById('type-fb').textContent = `Answer: ${target}`;
  document.getElementById('type-fb').className   = 'bad';
  document.getElementById('sub-btn').textContent = 'NEXT →';
  document.getElementById('type-skip').disabled  = true;
  updHUD('t');
  if (settings.timed) setTimeout(() => { G.qi++; nextTQ(); }, 1500);
}

function typeHint() {
  if (G.hints <= 0 || G.hused) return;
  G.hints--; G.hused = true;
  const country   = G.q[G.qi];
  const isReverse = G.mode === 'reverse';
  const target    = isReverse ? country.name : country.capital;
  const masked    = target.split('').map((ch, i) => i === 0 || ch === ' ' ? ch : '_').join('');
  document.getElementById('type-hint').textContent = `💡 "${masked}" (−${HINT_PEN} pts)`;
  updHUD('t');
}

// ── MULTIPLE CHOICE MODE ──────────────────────────────────────────────────────
function pickWrongCapitals(correctCapital, country) {
  const pool = DATA.filter(d => d.region === country.region && d.capital !== correctCapital);
  return shuffle(pool).slice(0, 3).map(d => d.capital);
}

function pickWrongCountries(correctName, country) {
  let pool = DATA.filter(d => d.region === country.region && d.name !== correctName);
  if (pool.length < 3) pool = DATA.filter(d => d.name !== correctName);
  return shuffle(pool).slice(0, 3).map(d => d.name);
}

function nextMCQ() {
  if (G.qi >= G.q.length || G.lives <= 0) { endGame(); return; }
  G.done = false;
  const country = G.q[G.qi];
  const isFlag  = G.mode === 'flag';

  document.getElementById('mc-rl').textContent   = isFlag ? 'Which country is this flag?' : 'What is the capital of…';
  const flagEl = document.getElementById('mcflag');
  flagEl.textContent  = country.flag;
  flagEl.style.fontSize = isFlag ? '72px' : '';
  document.getElementById('mccname').textContent = isFlag ? '' : country.name;
  document.getElementById('mccsub').textContent  = isFlag ? '' : `Region: ${country.region}`;
  document.getElementById('mcq').textContent     = `${G.qi + 1}/${G.q.length}`;
  document.getElementById('mcprog').style.width  = `${(G.qi / G.q.length) * 100}%`;

  const choices = isFlag
    ? shuffle([country.name,    ...pickWrongCountries(country.name, country)])
    : shuffle([country.capital, ...pickWrongCapitals(country.capital, country)]);
  const correct = isFlag ? country.name : country.capital;
  G.correctMCIdx = choices.indexOf(correct);
  choices.forEach((item, i) => {
    const btn = document.getElementById('mc' + i);
    btn.textContent = `${i + 1}.  ${item}`;
    btn.className   = 'mc-choice';
    btn.disabled    = false;
  });
  document.getElementById('mc-skip').disabled = false;
  updHUD('mc');
  if (settings.timed && settings.difficulty !== 'easy') startTimer('mc-timer', 'mc-timer-wrap', TIMER_SECS[settings.difficulty], skipMC);
}

function handleMCAnswer(idx) {
  if (G.done) return;
  G.done = true;
  stopTimer();
  const country = G.q[G.qi];
  for (let i = 0; i < 4; i++) document.getElementById('mc' + i).disabled = true;
  document.getElementById('mc' + G.correctMCIdx).classList.add('correct');
  if (idx === G.correctMCIdx) {
    const streakBonus = G.streak >= 3 ? STREAK_BONUS : 0;
    const pts = Math.max(10, BASE_PTS + streakBonus);
    G.score += pts; G.streak++; G.correct++;
    if (G.streak > G.best) G.best = G.streak;
    playSFX(true);
  } else {
    document.getElementById('mc' + idx).classList.add('wrong');
    G.missed.push(country);
    G.streak = 0; G.lives--;
    playSFX(false);
  }
  updHUD('mc');
  setTimeout(() => {
    G.qi++;
    if (G.lives <= 0) endGame(); else nextMCQ();
  }, 1200);
}

function skipMC() {
  if (G.done) return;
  G.done = true;
  stopTimer();
  G.streak = 0;
  G.missed.push(G.q[G.qi]);
  for (let i = 0; i < 4; i++) document.getElementById('mc' + i).disabled = true;
  document.getElementById('mc' + G.correctMCIdx).classList.add('correct');
  document.getElementById('mc-skip').disabled = true;
  updHUD('mc');
  setTimeout(() => { G.qi++; nextMCQ(); }, 1500);
}

// ── END GAME ──────────────────────────────────────────────────────────────────
function renderReview() {
  const section = document.getElementById('review-section');
  if (!G.missed.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  const seen   = new Set();
  const unique = G.missed.filter(c => { if (seen.has(c.name)) return false; seen.add(c.name); return true; });
  document.getElementById('review-list').innerHTML = unique.map(c =>
    `<div class="review-item">
      <span class="review-flag">${c.flag}</span>
      <div class="review-country">${c.name}</div>
      <div class="review-cap">${c.capital}</div>
    </div>`
  ).join('');
}

function endGame() {
  stopTimer();
  const modeLabels = { map: '🗺️ Map', type: '⌨️ Type', mc: '🔤 MC', reverse: '🔄 Rev', flag: '🚩 Flag' };
  document.getElementById('etitle').textContent = G.lives <= 0 ? '💀 GAME OVER!' : '🎉 COMPLETE!';
  document.getElementById('escore').textContent = G.score;
  document.getElementById('ecorr').textContent  = `${G.correct}/${G.q.length}`;
  document.getElementById('estrk').textContent  = G.best;
  document.getElementById('emode').textContent  = modeLabels[G.mode] || G.mode;
  renderReview();
  document.getElementById('rend').classList.add('show');
}

function saveScore() {
  const name      = document.getElementById('pname').value.trim() || 'Anonymous';
  const modeNames = { map: 'Map', type: 'Type', mc: 'MC', reverse: 'Rev', flag: 'Flag' };
  const mode      = modeNames[G.mode] || G.mode;
  fetch(API + '/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score: G.score, mode, correct: G.correct, streak: G.best, difficulty: settings.difficulty }),
  }).catch(() => {});
  toast('Score saved! 🏆');
}

function savePlay() { saveScore(); document.getElementById('rend').classList.remove('show'); startGame(G.mode); }
function saveHome() { saveScore(); document.getElementById('rend').classList.remove('show'); showLB(); }

// ── LEADERBOARD ───────────────────────────────────────────────────────────────
function renderLB() {
  const el = document.getElementById('lbt');
  if (!lbScores) {
    el.innerHTML = '<div class="lbe">Could not load scores — check your connection.</div>';
    return;
  }
  const filtered = lbScores.filter(s => s.difficulty === lbDiff && s.mode === lbMode);
  if (!filtered.length) {
    el.innerHTML = '<div class="lbe">No scores yet for this mode & difficulty!</div>';
    return;
  }
  const medals    = ['🥇','🥈','🥉'];
  const rankClass = i => ['r1','r2','r3'][i] ?? '';
  el.innerHTML =
    `<div class="lbh"><div>Rank</div><div>Player</div><div>Score</div><div>Correct</div></div>` +
    filtered.map((s, i) => `<div class="lbr">
      <div class="lbrank ${rankClass(i)}">${medals[i] ?? '#' + (i + 1)}</div>
      <div class="lbname">${esc(s.name)}</div>
      <div class="lbsc">${s.score}</div>
      <div class="lbcorr">${s.correct ?? '—'}</div>
    </div>`).join('');
}

function clearLB() {
  toast('Global leaderboard — scores can\'t be cleared here');
}

// ── STUDY SCREEN ──────────────────────────────────────────────────────────────
function showStudy() {
  show('study');
  document.getElementById('study-q').value   = '';
  document.getElementById('study-rgn').value = '';
  renderStudy();
}

function renderStudy() {
  const query  = document.getElementById('study-q').value.toLowerCase();
  const region = document.getElementById('study-rgn').value;
  let list = region ? DATA.filter(c => c.region === region) : [...DATA];
  if (query) list = list.filter(c => c.name.toLowerCase().includes(query) || c.capital.toLowerCase().includes(query));
  const el = document.getElementById('study-list');
  if (!list.length) { el.innerHTML = '<div class="study-empty">No results found</div>'; return; }
  el.innerHTML = list.map(c =>
    `<div class="study-item">
      <span class="study-flag">${c.flag}</span>
      <div class="study-info">
        <div class="study-country">${c.name}</div>
        <div class="study-cap">${c.capital}</div>
      </div>
      <div class="study-region">${SUBREGION[c.name] || c.region}</div>
    </div>`
  ).join('');
}

// ── EVENTS & INIT ─────────────────────────────────────────────────────────────

// Autocomplete: clicking outside closes it; clicking an item fills the input
document.addEventListener('click', e => {
  if (!e.target.closest('#type-iw')) document.getElementById('ac').style.display = 'none';
});
document.getElementById('ac').addEventListener('click', e => {
  const item = e.target.closest('.aci');
  if (item) {
    document.getElementById('type-in').value = item.dataset.val;
    document.getElementById('ac').style.display = 'none';
  }
});

// Keyboard shortcuts 1–4 for Multiple Choice
document.addEventListener('keydown', e => {
  if (!document.getElementById('mc-game').classList.contains('active')) return;
  const idx = ['1','2','3','4'].indexOf(e.key);
  if (idx !== -1) handleMCAnswer(idx);
});

updateHomeSettings();


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
