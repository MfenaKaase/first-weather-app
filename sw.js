const cacheName = 'cache-v0';
const resourcesToPrecache = [
    './',
    './index.html',
    './main.css',
    './script.js',
    './img/Big_Nature.jpeg',
    './icons/cloud.png',
    './icons/cloud1.png',
    './manifest.webmanifest'
];


self.addEventListener('install', event => {
    console.log('Install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('caching!')
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activate event!')
});

self.addEventListener('fetch', event => {
    console.log('Fetch event!')
   /* event.respondWith(
        caches.match(event.request)
        .then(response => {
            return caches.open(cacheName)
            .then(cache => {
                console.log('caching new resources!');
                cache.put(event.request, response.clone());
                return response;
            });
        })
    ); */
});
