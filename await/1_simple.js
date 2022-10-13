const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"

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
        console.log(`Tipo : ${element.name}`)
        console.log(`--------------------`)
    });
}

function fallo(status){
    console.log(status)
}

const f = async function(){
    try{
    let response = await get_data(url)
    exito(response)
    } catch(status){
        fallo(status)
    }

}

f()