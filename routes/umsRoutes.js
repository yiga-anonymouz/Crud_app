const express = require('express');
const Controller = require("../controller/controller")
const router = express.Router()

const PORT = 3000

router.get('/', Controller.ums_index)

router.post('/' , Controller.ums_insert)

router.get('/update', Controller.ums_update_index)

router.post('/update', Controller.ums_update_insert)

router.post('/delete', Controller.ums_delete)

router.use(Controller.not_found)

module.exports = router