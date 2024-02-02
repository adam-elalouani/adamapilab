const express = require("express");
const bcrypt = require('bcrypt');
const app = express();
const db = require("./db");
const search = require("./search");
const PORT = 3999;

const CPUINFO = (cpuid, callback) => {
    const query = 'SELECT * FROM cpus WHERE id = ?';
    db.get(query, [cpuid], (error, result) => {
        callback(error, result);
    });
};


const GPUINFO = (gpuid, callback) => {
    const query = 'SELECT * FROM gpus WHERE id = ?';
    db.get(query, [gpuid], (error, result) => {
        callback(error, result);
    });
};


const Prices = (callback) => {
    const query = 'SELECT id, price FROM cpus UNION SELECT id, price FROM gpus';
    db.all(query, (error, result) => {
        callback(error, result);
    });
};



//These endpoints were just testing
const createCPU = (cpu, callback) => {
    const { brand, model, price } = cpu;
    const query = 'INSERT INTO cpus (brand, model, price) VALUES (?, ?, ?)';
    db.run(query, [brand, model, price], (error) => {
        callback(error);
    });
};

const createGPU = (gpu, callback) => {
    const { brand, model, price } = gpu;
    const query = 'INSERT INTO gpus (brand, model, price) VALUES (?, ?, ?)';
    db.run(query, [brand, model, price], (error) => {
        callback(error);
    });
};

const getallCPUs = (callback) => {
    const query = 'SELECT * FROM cpus';
    db.all(query, (error, result) => {
        callback(error, result);
    });
};

const getallGPUs = (callback) => {
    const query = 'SELECT * FROM gpus';
    db.all(query, (error, result) => {
        callback(error, result);
    });
};

module.exports = {
    CPUINFO,
    GPUINFO,
    Prices,

createCPU,
createGPU,
getallCPUs,
getallGPUs,
};