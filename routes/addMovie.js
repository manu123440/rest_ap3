const express = require('express');

const router = express.Router();

router.get('/add', (req, res, next) => {
    return res.render("form3", {
        editing: false,
        dataArray: [],
        season: '',
        sid: '',
        title: '',
        type: ''
    });
})

module.exports = router;