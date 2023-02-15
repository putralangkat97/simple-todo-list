const express = require('express')
var router = express.Router()

const TodoController = require('./controllers/TodoController')
router.use('/todo', TodoController)


router.get('/health', (req, res) => {
    res.send('OK')
})

module.exports = router