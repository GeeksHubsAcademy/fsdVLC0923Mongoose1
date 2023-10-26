
//EXPRESS

const express = require("express");

const app = express();

const PORT = 5500;

//Importo fichero ./router
const router = require('./router');

//Middlewares
//Para poder usar json
app.use(express.json());

app.use(router);

const dbconnect = require("./db/dbconnect");

dbconnect();

app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))