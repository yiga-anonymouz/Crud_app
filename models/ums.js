const mongoose = require('mongoose')

const userSchema = {
    name: String,
    email: String,
    gender: String,
    status: String,
    modified: Boolean
}

const Users = mongoose.model('User', userSchema)

module.exports = Users