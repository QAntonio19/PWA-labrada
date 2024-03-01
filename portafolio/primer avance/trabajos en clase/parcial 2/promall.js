let sumarLento =  (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1);
            reject('Funcion lento con fallas')
        }, 1000);
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(numero + 1);
            reject('fallas')
        }, 300);
    });
}

sumarLento(5).then(console.log)
sumarRapido(10).then(console.log)

console.log("########");

Promise.all((sumarLento(5), sumarRapido(10)))
    .then(response => {
        response.forEach(respuesta => console.log(respuesta))
    })
    .catch(console.log)