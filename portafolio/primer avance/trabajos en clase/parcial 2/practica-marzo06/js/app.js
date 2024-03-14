if(navigator.serviceWorker){
    console.log("Service Worker is supported");
    navigator.serviceWorker.register('sw.js');
}
else{
    console.log('No es compatible');
}