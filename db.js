//DATABASE
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('CPU/GPU.db');

// Create tables if they don't exist
db.serialize(() => {
    db.run(`
        INSERT INTO cpus (brand, model, price)
        VALUES ('Intel', 'Core i5', 300)
        )
    `);

    db.run(`
    INSERT INTO gpus (brand, model, price)
    VALUES ('Nvidia Geforce', 'RTX 4090', 1800)
    )
`);
});

//-----------------------------
// #region Setup
//-----------------------------
const express = require("express");
const bcrypt = require('bcrypt');
const app = express();
const search = require("./search");
const PORT = 3999;
//#endregion Setup

//-----------------------------
//#region App Config
//-----------------------------
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Middleware that parses POST / PUT requests from a client
app.use(express.json());


//-----------------------------
//#region Database Routes
//-----------------------------

app.get('/', (req, res)=> res.send({"welcome": "it works"}))
/* CRUD DB Routes */ 

// PAST ORDERS 

// LOGIN (if I learn authentication)

// CREATE TRADE // given a json object of an array of books.  

app.post('/CPUINFO/:cpuid', (req, res) => {
    const cpuid = req.params.cpuid;
    db.CPUINFO(cpuid, (error, result) => {
        if (error) {
            res.status(404).send({ error: 'CPU cannot be found' });
        } else {
            res.send(result);
        }
    });
});

app.post('/GPUINFO/:gpuid', (req, res) => {
    const gpuid = req.params.gpuid;
    db.GPUINFO(gpuid, (error, result) => {
        if (error) {
            res.status(404).send({ error: 'GPU cannot be found' });
        } else {
            res.send(result);
        }
    });
});

app.get('/Prices', (req, res) => {
    db.Prices((error, result) => {
        if (error) {
            res.status(404).send({ error: 'Price cannot be found' });
        } else {
            res.send(result);
        }
    });
});
//#endregion Database Routes


//-----------------------------
//#region Server
//-----------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
  //#endregion Server
