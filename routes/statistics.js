const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const keys = require('../config/config.js').keys;
const url = keys.mongoURI;


var db;
MongoClient.connect(url, function(err, database) {
    if (err) {
        console.log(err);
    }
    else {
        db = database;
    }
});


router.get('/', function(req, res, next) {
    res.render('statistics');
});

module.exports = router;