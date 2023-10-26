
//EXPRESS

const express = require("express");

const app = express();

const PORT = 5500;

const dbconnect = require("./db/dbconnect");

dbconnect();

app.listen(PORT, () => console.log(`Node server running on http://localhost:${PORT}` ))