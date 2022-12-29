const express = require('express');
const Users = require("../models/ums")
const router = express.Router()

router.get('/', (req, res) => {
    Users.find({'id': 1}, (err, userDatas) => {
        res.render('ums', {userDAta : userDatas})
    })
})

router.post('/' , (req, res) => {
    const inputData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        modified: false
    }
    const inputs = new Users(inputData);
    
    inputs.save()
    
    res.redirect('/');
})

module.exports = router