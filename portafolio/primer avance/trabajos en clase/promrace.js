let sumarLento =  (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1);
            reject("Fatal error")
        }, 800);
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
}

Promise.race((sumarLento(5), sumarRapido(10)))
    .then(console.log).catch(console.log);