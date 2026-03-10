const CACHE_NAME = 'dispatch-v7';
const ASSETS = [
  './Dispatch_v7-2.html',
  'https://code.jquery.com/jquery-3.7.0.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];


self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});


self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});