// dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

//Funcion para conectarnos con una API publica
const url = "https://pokeapi.co/api/v2/type" 

const exito = data =>{
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`--------------------`)
    });
}

const fallo = status =>{
    console.log(status)
}


//funcion para conectarnos  a una API publica
const get_data = (endpoint , exito  , fallo) =>{
    //1. Crear el objeto de Conexion
    const h = new http()
    //2. Abrir una conexion a la API
    h.open('GET' , endpoint)
    //3. Enviar la Request defiinida
    h.send()
    //4. Una vez recibida la Response,
    //   tratar la información
    h.onload = () => {

        if(h.status === 200){
            exito(h.responseText)
        } else{
            fallo(http.status)
        }
    }
}

//Invocar get_data
get_data(url, exito, fallo)