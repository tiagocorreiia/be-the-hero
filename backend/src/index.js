const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

// Rota / Recurso

//==> Método HTTP
// GET: Buscar/Acessar/Listar uma info do back-end
// POST: Criar uma info no back-end
// PUT: Alterar uma info do back-end
// DELETE: Deletar uma info no back-end

//==> Tipos de parâmetros
// Query: Parâmetros nomeados enviados na rota apos "?"(Filtros Paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

// ==> SQL
// MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server

// Driver: Select * FROM users
// Query Builder: table('users').select('*').where()

// ==> NoSQL
// MongoDB, CouchDB, etc...

app.listen(3333)
