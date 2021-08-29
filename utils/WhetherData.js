// jshint esversion:6
const request = require('request');
const constants = require('../config');

const whetherData = (address, callback) => {
    const URL = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid' + constants.openWeatherMap.SECRET_KEY;
    console.log(URL);
    callback(true);
};

module.exports = whetherData;