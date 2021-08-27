//jshint esversion:6
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const port = process.env.port || 3000;

const publicStaticDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/partials');
const partialsPath = path.join(__dirname, '../template/partials');


app.use('view engine', 'hbs');
app.use('views', viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

///////////////////////////////////
//ROUTES

app.get('/', (req, res) => {
    res.send("Welcome to the site from back-end");
});

app.get('/whether', (req, res) => {
    res.send("This is whether api");
});

app.get('*', (req, res) => {
    res.send("Hello");
});

////////////////////////////////////
//LISTENING TO PORT

app.listen(port, () => {
    console.log("Server is ready ");
});