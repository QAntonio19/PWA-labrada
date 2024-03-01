function sumaruno(numero){
    var prom = new Promise(function(resolve, reject){
        if(numero >= 7){
            reject('numero muy grande');
        }
        setTimeout(function(){
            resolve(numero + 1)
        }, 800);
    })
    return prom;
}

sumaruno(5).then(nuevovalor)
    .then(nuevovalor => {
         console.log(nuevovalor);
         return sumaruno(nuevovalor);
    }).then(nuevovalor => {
     console.log(nuevovalor);
    })

// sumaruno(5).then(sumaruno)
//     .then(sumaruno)
//     .then(nuevovalor => {
//         console.log(nuevovalor);
//     })