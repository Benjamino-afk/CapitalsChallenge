const STATIC_CACHE = 'capitals-static-v8';
const CDN_CACHE = 'capitals-cdn-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css?v=10',
  './app.js?v=10',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-180.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  const valid = [STATIC_CACHE, CDN_CACHE];
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !valid.includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Same-origin assets: cache-first
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res.ok) {
            caches.open(STATIC_CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        });
      })
    );
    return;
  }

  // CDN resources (D3, TopoJSON, world-atlas, Google Fonts):
  // network-first so we always get fresh libs, cache as fallback for offline
  const isCDN = url.hostname.includes('cdn.jsdelivr.net') ||
                url.hostname.includes('cdnjs.cloudflare.com') ||
                url.hostname.includes('fonts.googleapis.com') ||
                url.hostname.includes('fonts.gstatic.com');

  if (isCDN) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(CDN_CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  }
});
