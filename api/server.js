const express = require("express");

const accountsRouter = require('./accounts/accounts-router')
const server = express();

server.use(express.json());

//must be put before catch all, order matters! and after express json because it needs to use it
server.use('/api/accounts', accountsRouter)

//catch all endpoint
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

module.exports = server;
