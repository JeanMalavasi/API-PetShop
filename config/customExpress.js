//Configurar modificaçoes no express
const express = require('express')
const consign = require('consign')


module.exports = () => {
    //Executa o express
    const app = express()
    app.use(express.json())
    

    consign()
        .include('controllers')
        .into(app)

    return app
}
