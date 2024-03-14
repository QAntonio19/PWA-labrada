document.addEventListener("DOMContentLoaded", function() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    function obtenerListaPendientes() {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('Error al obtener la lista de pendientes:', error);
                return [];
            });
    }

    function mostrarMenu() {
        const menu = document.getElementById('menu');
        menu.innerHTML = `
            <p>Selecciona una opción:</p>
            <button onclick="mostrarSoloIDs()">1. Lista de todos los pendientes(solo IDs)</button>
            <button onclick="mostrarIDsyTitulos()">2. Lista de todos los pendientes(IDs y Titles)</button>
            <button onclick="mostrarPendientesNoResueltos()">3. Lista de todos los pendientes sin resolver (ID y title)</button>
            <button onclick="mostrarPendientesResueltos()">4. Lista de todos los pendientes resueltos (ID y title)</button>
            <button onclick="mostrarTodosPendientesIDyUserID()">5. Lista de todos los pendientes (IDs y userId)</button>
            <button onclick="mostrarPendientesResueltosIDyUserID()">6. Lista de todos los pendientes resueltos (IDs y userId)</button>
            <button onclick="mostrarPendientesSinResolverIDyUserID()">7. Lista de todos los pendientes sin resolver (IDs y userId)</button>
        `;
    }

    function mostrarSoloIDs() {
        obtenerListaPendientes()
            .then(pendientes => {
                const output = document.getElementById('output');
                output.innerHTML = '';
                pendientes.forEach(pendiente => {
                    output.innerHTML += `<p>ID: ${pendiente.id}</p>`;
                });
            });
    }

  // Función para mostrar IDs y títulos
function mostrarIDsyTitulos() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            pendientes.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, Title: ${pendiente.title}</p>`;
            });
        });
}

// Función para mostrar pendientes no resueltos
function mostrarPendientesNoResueltos() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            const pendientesNoResueltos = pendientes.filter(pendiente => !pendiente.completed);
            pendientesNoResueltos.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, Title: ${pendiente.title}</p>`;
            });
        });
}

// Función para mostrar pendientes resueltos
function mostrarPendientesResueltos() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            const pendientesResueltos = pendientes.filter(pendiente => pendiente.completed);
            pendientesResueltos.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, Title: ${pendiente.title}</p>`;
            });
        });
}

// Función para mostrar IDs y userIds
function mostrarTodosPendientesIDyUserID() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            pendientes.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, UserId: ${pendiente.userId}</p>`;
            });
        });
}

// Función para mostrar pendientes resueltos con IDs y userIds
function mostrarPendientesResueltosIDyUserID() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            const pendientesResueltos = pendientes.filter(pendiente => pendiente.completed);
            pendientesResueltos.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, UserId: ${pendiente.userId}</p>`;
            });
        });
}

// Función para mostrar pendientes no resueltos con IDs y userIds
function mostrarPendientesSinResolverIDyUserID() {
    return obtenerListaPendientes()
        .then(pendientes => {
            const output = document.getElementById('output');
            output.innerHTML = '';
            const pendientesSinResolver = pendientes.filter(pendiente => !pendiente.completed);
            pendientesSinResolver.forEach(pendiente => {
                output.innerHTML += `<p>ID: ${pendiente.id}, UserId: ${pendiente.userId}</p>`;
            });
        });
}

// Función para resetear el área donde se muestran los IDs
function resetearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '';
}

    // Funciones restantes para mostrar los diferentes datos de pendientes, similares a mostrarSoloIDs()

    function main() {
        mostrarMenu();
    }

    // Hacer que las funciones estén disponibles globalmente
    window.resetearOutput = resetearOutput;
    window.mostrarSoloIDs = mostrarSoloIDs;
    window.mostrarIDsyTitulos = mostrarIDsyTitulos;
    window.mostrarPendientesNoResueltos = mostrarPendientesNoResueltos;
    window.mostrarPendientesResueltos = mostrarPendientesResueltos;
    window.mostrarTodosPendientesIDyUserID = mostrarTodosPendientesIDyUserID;
    window.mostrarPendientesResueltosIDyUserID = mostrarPendientesResueltosIDyUserID;
    window.mostrarPendientesSinResolverIDyUserID = mostrarPendientesSinResolverIDyUserID;
    // Resto de funciones a definir globalmente de la misma manera

    main();
});
