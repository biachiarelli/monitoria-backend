const express = require('express')
const app = express()

// Banco de dados
const db = require('./config/db')

// Consign, que carrega todos os módulos
const consign = require('consign')

// Inicia o sistema
consign()
    //.include('./config/passaporte.js')
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/rotas.js')
    .into(app) // Passa o App como padrão para todos os Then

// Permite fazer inserções junto ao Knex
app.db = db

app.listen(3003, () => {
    console.log("Backend on port 3003")
})