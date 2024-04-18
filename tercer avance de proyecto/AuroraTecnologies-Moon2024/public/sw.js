self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
    const installing = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Service Worker installed.');
            self.skipWaiting();
            resolve();
        }, 1000);
    });
    event.waitUntil(installing);
});