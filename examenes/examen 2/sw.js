self.addEventListener('install', event => {
    console.log("SW: instalando el sw");
    const installing = new Promise((resolver, reject) => {
        setTimeout(() => {
            console.log("SW: he terminado de instalarme");
        }, 1000);
        self.skipWaiting();
    });
    event.waitUntil(installing);
});

self.addEventListener('activate', event => {
    console.log("Service Worker activated");
});