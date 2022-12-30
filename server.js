const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require(`${__dirname}/routes/umsRoutes`)

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`));
mongoose.connect('mongodb+srv://Yigalanshey:letsfuckingoo@cluster0.3wppw9b.mongodb.net/?retryWrites=true&w=majority')

let customers = []

//Ums Routes

app.use(router)


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log('Server started')
})