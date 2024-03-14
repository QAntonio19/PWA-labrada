self.addEventListener('fetch', event => {
    console.log(event.request.url.includes)
    if(event.request.url.includes('css/styles.css')){
        let r = new Response(`
            body {
                background-color: '#25292e';
                color: 'white';
            }
        `, {
            headers: {
            "Content-Type": "text/css"
            }
        });
        event.responseWith(r);
    }
})