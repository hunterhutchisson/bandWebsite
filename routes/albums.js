const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


router.get('/albums', (req, res) => {
    res.render('albums')
})

module.exports = router;