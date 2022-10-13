const axios = require('axios')

const url = "http://api.open-notify.org/astros"
//Configuración de Request
let config = {
    url : url, 
    method: 'get'
}

const f = async() =>{
    try{ 
        let response = await axios(config)
        const tipos = response.data.people
        tipos.forEach((element) => {
            console.log(element.name)
            console.log('///////////////////')
        })
    } catch (error) {
        console.log(Error(error))
    }
}

f()