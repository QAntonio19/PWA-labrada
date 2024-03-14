self.addEventListener('install', event => {
    console.log("SW: instalando el sw");
    const installing = new Promise((resolver, reject) => {
        setTimeout(() => {
            console.log("SW: he terminado de instalarme");
        }, 1000);
        self.skipWaiting();
        resolver();
    });
    event.waitUntil(installing);
});

self.addEventListener('activate', event => {
    console.log("Service Worker activated");
});

self.addEventListener('fetch', event => {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Verificar si la solicitud es para la URL de la lista de IDs
          if (event.request.url === 'https://jsonplaceholder.typicode.com/todos') {
            // Clonar la respuesta para poder modificarla
            const clonedResponse = response.clone();
  
            // Modificar la respuesta
            return clonedResponse.json().then(data => {
              // Iterar sobre los datos y agregar el símbolo después de cada ID
              const modifiedData = data.map(item => {
                // Agregar el símbolo (en este caso, un guion) después de cada ID
                item.id = item.id + "&";
                return item;
              });
              // Convertir los datos modificados de nuevo a una respuesta
              const modifiedResponse = new Response(JSON.stringify(modifiedData), {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText
              });
              return modifiedResponse;
            });

          }else {
            // Si la solicitud no es para la URL de la lista de IDs, devolver la respuesta original
            return response;
          }
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
        })
    );
  });

self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('.jpg') || event.request.url.includes('.png')) {
        console.log(event.request.url)
        event.respondWith(fetch('./images/nfl.png'));
    }
});