const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//Configuración de Request
let config = {
    url : url,
    method: 'get'
}

//Realizar la Operación ASYNC
axios(config)
    .then(function(response){
            return response.data.results
    }).then(function(data){
        data.forEach(function(tipo){
            console.log(`Tipo: ${tipo.name}`)
            console.log(`*************`)
        })
    })
    .catch(function(error){
        console.log(Error(`Error : $error`))
    })