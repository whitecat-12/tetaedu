self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('teta-sains-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icons/icon-192.png',
        './icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
