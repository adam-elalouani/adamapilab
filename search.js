// Contains extra search functionality before talking to the db 

const db = require("./db");

const CPUINFO = (req, res) => {
    // for now just call db but also have some constraints like >3 letters 
    // technically this should be done frontend 
    if (req.body.author == undefined || req.body.author.length <= 3) {
        res.status(400).json({ error: "search query needs to be more than 3 letters" })
    } else {
        db.CPUINFO(req, res)
    }
}

const GPUINFO = (req, res) => {
    // for now just call db but also have some constraints like >3 letters 
    // technically this should be done frontend 
    if (req.body.author == undefined || req.body.author.length <= 3) {
        res.status(400).json({ error: "search query needs to be more than 3 letters" })
    } else {
        db.GPUINFO(req, res)
    }
}

const Prices = (req, res) => {
    // for now just call db but also have some constraints like >3 letters 
    // technically this should be done frontend 
    if (req.body.book == undefined || req.body.book.length <= 3) {
        res.status(400).json({ error: "search query needs to be more than 3 letters" })
    } else {
        db.Prices(req, res)
    }
}

module.exports = {
    CPUINFO,
    GPUINFO,
    Prices,

createCPU,
createGPU,
getallCPUs,
getallGPUs,
}