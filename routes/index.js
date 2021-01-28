'use strict'

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;