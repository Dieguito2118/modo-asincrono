// dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest


function exito(data){
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`--------------------`)
    });
}

function fallo(status){
    console.log(status)
}

const url = "https://rickandmortyapi.com/api/character"

//funcion para conectarnos  a una API publica
function get_data(endpoint , exito  , fallo){
    //1. Crear el objeto de Conexion
    const h = new http()
    //2. Abrir una conexion a la API
    h.open('GET' , endpoint)
    //3. Enviar la Request defiinida
    h.send()
    //4. Una vez recibida la Response,
    //   tratar la información
    h.onload = function(){
        exito(h.responseText)
    }
}

//Invocar get_data
get_data(url, exito, fallo)