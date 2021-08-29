//jshint esversion:6
const express = require('express');
const path = require('path');
const whetherData = require('../utils/WhetherData');

const app = express();

const port = process.env.port || 3000;

const publicStaticDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

app.set('view engine', 'ejs');
app.set('views', viewPath);
app.use(express.static(publicStaticDirPath));

///////////////////////////////////
//ROUTES

app.get('/', (req, res) => {
    res.send("Welcome to the site from back-end");
});

app.get('/whether', (req, res) => {
    const address = req.query.address;

    whetherData(address, (error, { temperature, description, cityname }) => {
        if (error) {
            return res.send("There is a error");
        }
        console.log({ temperature, description, cityname });
        res.send({ temperature, description, cityname });
    });
});

app.get('*', (req, res) => {
    res.send("Hello");
});

////////////////////////////////////
//LISTENING TO PORT

app.listen(port, () => {
    console.log("Server is ready ");
});