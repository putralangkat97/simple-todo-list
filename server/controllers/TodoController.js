var express = require("express");
var router = express.Router();
var Api = require('../service/api');

router.get('/list', async (request, response) => {
    try {
        const res = await Api.getTodo()
        response.status(200).json(res.data)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router