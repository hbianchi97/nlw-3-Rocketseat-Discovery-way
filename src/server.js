//import the express
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express()
server

    .use(express.urlencoded({ extended: true }))

    .use(express.static('public'))

    //template engine config
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //site adress
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

    

//turn on server
server.listen(5500)