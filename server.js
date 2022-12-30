const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require("./routes/umsRoutes")

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`));
mongoose.connect('mongodb://localhost/ums')

let customers = []


// users.insertMany(userone, (err , res) => {
//     if(err){
//         console.log('STFU bitch')
//     }else{
//         console.log('saved succesfullly')
//     }
// })

//Ums Routes

app.use(router)


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log('Server started')
})