const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/tye"

function get_data(endpoint){

    let promise = new Promise(function (resolve , rejected){
    //1. Crear el objeto de Conexion
    const h = new http()
    //2. Abrir una conexion a la API
    h.open('GET' , endpoint)
    //3. Enviar la Request defiinida
    h.send()
    //4. Una vez recibida la Response,
    //   tratar la información
    h.onload = function(){
        if(h.status === 200){
            resolve(h.responseText)
        } else{
            rejected(h.status)
        }
    }
    })
    return promise
}

function exito(data){
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo
    tipos.forEach(function (element) {
        console.log(element)
        console.log(`--------------------`)
    });
}

function fallo(status){
    console.log(status)
}

get_data(url)
    .then(function(data){
    exito(data)
    }).catch(function(error){
    fallo(Error(error))
})