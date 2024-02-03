// La liga de la NFL requiere una aplicacion en JS que resuelva el problema de la pizarra de pendientes, la aplicaicones debe contemplar 
// el control de la lista de pendientes (ToDo), esta aplicación debe de obtener la lista de pendientes de la siguiente url https://jsonplaceholder.typicode.com/todos
// Se recomienda visitar la url y comprobar quew está toda la información necesaria, por otro lado la NFL necesita que la aplicación realice lo siguiente
// 1.- Lista de todos los pendientes(solo IDs)         
// 2.- Lista de todos los pendientes(IDs y Titles)         
// 3.- Lista de todos los pendientes sin resolver (ID y title)         
// 4.- Lista de todos los pendientes resueltos (ID y title)         
// 5.- Lista de todos los pendientes (IDs y userId)         
// 6.- Lista de todos los pendientes resueltos (IDs y userId)         
// 7.- Lista de todos los pendientes sin resolver (IDs y userId)  
// La aplicacion dbe de tener un menú de navegacion para un mejor manejo de la aplicación 
const url = "http://jsonplaceholder.typicode.com/todos"
const fs = require("fs")

//funcion para obtener la lista de pendientes desde la API
function obtenerListaPendientes() {
  return fetch(url)
      .then(response => response.json())
      .then(data => {
        fs.writeFile("pendientes.json", JSON.stringify(data, null, 2), err => {
            if (err) throw err;
            console.log("Los datos se han guardado correctamente en 'pendientes.json'");
        });
        return data;
    })
      .catch(error => {
          console.error('Error al obtener la lista de pendientes:', error);
          return [];
      });
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log('Selecciona una opcion:');
  console.log('1. Lista de todos los pendientes(solo IDs) ');
  console.log('2. Lista de todos los pendientes(IDs y Titles) ');
  console.log('3. Lista de todos los pendientes sin resolver (ID y title)');
  console.log('4. Lista de todos los pendientes resueltos (ID y title)');
  console.log('5. Lista de todos los pendientes (IDs y userId)');
  console.log('6. Lista de todos los pendientes resueltos (IDs y userId)   ');
  console.log('7. Lista de todos los pendientes sin resolver (IDs y userId) ');
  console.log('0. Salir');
}

//funcion para mostrar solo los IDs de los pendientes
function mostrarSoloIDs() {
  return obtenerListaPendientes()
      .then(pendientes => {
          pendientes.forEach(pendiente => {
            console.log("ID: " + pendiente.id);
        });
      });
}

//funcion para mostrar IDs y titles
function mostrarIDsyTitulos() {
  return obtenerListaPendientes()
      .then(pendientes => {
          pendientes.forEach(pendiente => {
            console.log("ID: " + pendiente.id + ", Title: " + pendiente.title);
        });
      });
}

//funcion para mostrar pendientes que no estan resueltas
function mostrarPendientesNoResueltos() {
  return obtenerListaPendientes()
      .then(pendientes => {
          const pendientesNoResueltos = [];
          pendientes.forEach(pendiente => {
              if (!pendiente.completed) {
                  pendientesNoResueltos[pendientesNoResueltos.length] = { id: pendiente.id, title: pendiente.title };
              }
          });
          pendientesNoResueltos.forEach(pendiente => {
              console.log("ID: " + pendiente.id + ", Title: " + pendiente.title);
          });
      });
}

//funcion para mostrar pendientes que estan resueltas
function mostrarPendientesResueltos() {
  return obtenerListaPendientes()
      .then(pendientes => {
          const pendientesResueltos = [];
          pendientes.forEach(pendiente => {
              if (pendiente.completed) {
                  pendientesResueltos[pendientesResueltos.length] = { id: pendiente.id, title: pendiente.title };
              }
          });
          pendientesResueltos.forEach(pendiente => {
              console.log("ID: " + pendiente.id + ", Title: " + pendiente.title);
          });
      });
}

//funcion para mostrar IDs y userIDs
function mostrarTodosPendientesIDyUserID() {
  return obtenerListaPendientes()
      .then(pendientes => {
          console.log('Lista de todos los pendientes (IDs y userId):');
          pendientes.forEach(pendiente => {
              console.log("ID: " + pendiente.id + ", UserId: " + pendiente.userId);
          });
      });
}

//funcion para mostrar pendientes que estan resueltas con IDs y userIDs
function mostrarPendientesResueltosIDyUserID() {
  return obtenerListaPendientes()
      .then(pendientes => {
          const pendientesResueltos = [];
          pendientes.forEach(pendiente => {
              if (pendiente.completed) {
                  pendientesResueltos[pendientesResueltos.length] = { id: pendiente.id, userId: pendiente.userId };
              }
          });
          pendientesResueltos.forEach(pendiente => {
              console.log("ID: " + pendiente.id + ", UserId: " + pendiente.userId);
          });
      });
}

//funcion para mostrar pendientes que no estan resueltas con IDs y userIDs
function mostrarPendientesSinResolverIDyUserID() {
  return obtenerListaPendientes()
      .then(pendientes => {
          const pendientesSinResolver = [];
          pendientes.forEach(pendiente => {
              if (!pendiente.completed) {
                  pendientesSinResolver[pendientesSinResolver.length] = { id: pendiente.id, userId: pendiente.userId };
              }
          });
          pendientesSinResolver.forEach(pendiente => {
              console.log("ID: " + pendiente.id + ", UserId: " + pendiente.userId);
          });
      });
}

//funcion main para permitir que se pueda elegir entras las 7 opciones para mostrar la api
async function main() {
  let opcion;
  do {
      mostrarMenu();
      opcion = await pregunta('Ingrese el numero de opcion: ');
      opcion = parseInt(opcion);
      switch (opcion) {
          case 1:
              await mostrarSoloIDs();
              break;
          case 2:
              await mostrarIDsyTitulos();
              break;
          case 3:
              await mostrarPendientesNoResueltos();
              break;
          case 4:
              await mostrarPendientesResueltos();
              break;
          case 5:
              await mostrarTodosPendientesIDyUserID();
              break;
          case 6:
              await mostrarPendientesResueltosIDyUserID();
              break;
          case 7:
              await mostrarPendientesSinResolverIDyUserID();
              break;
          case 0:
              console.log('Saliendo...');
              readline.close();
              break;
          default:
              console.log('Opcion no valida, intentalo de nuevo.');
      }
  } while (opcion !== 0);
}

//funcion para hacer preguntas de que si quiere obtener otro json o salir
function pregunta(texto) {
    return new Promise(resolve => {
        readline.question(texto, answer => {
            resolve(answer);
        });
    });
}

main();