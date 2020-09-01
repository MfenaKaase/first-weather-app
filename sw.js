const cacheName = 'cache-v1';
const resourcesToPrecache = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './icons/to-do-list.png',
    './icons/to-do-list1.png',
    './manifest.webmanifest'
];


self.addEventListener('install', event => {
    console.log('Install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Activate event!')
});

self.addEventListener('fetch', event => {
    console.log('Fetch event!')
});