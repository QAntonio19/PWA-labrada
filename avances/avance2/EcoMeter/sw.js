self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    const installing = new Promise((resolve) => {
        setTimeout(() => {
            console.log('Service Worker installed.');
            self.skipWaiting();
            resolve();
        }, 1000);
    });
    event.waitUntil(installing);
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
    console.log(event);
    const activating = new Promise((resolve) => {
        setTimeout(() => {
            console.log('Service Worker activated.');
            resolve();
        }, 1000);
    });
    event.waitUntil(activating);
});

