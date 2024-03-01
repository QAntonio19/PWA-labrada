function sumaruno(numero, callback){
    setTimeout(function(){
        // return numero + 1;
        callback(numero + 1)
    }, 1200);
}

sumaruno(5, function(valor){
    // console.log(valor)
    sumaruno(valor, function(nuevovalor){
        // console.log(nuevovalor)
        sumaruno(nuevovalor, function(nuevovalor2){
            console.log(nuevovalor2)
        })
    })
})