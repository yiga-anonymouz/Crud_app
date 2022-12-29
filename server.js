const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const uniRl = require('url')
const emailvalidator = require("email-validator")
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

app.post('/delete' , (req , res) => {
    console.log(req.body)
    const deletedId = req.body.deleted

    Users.findByIdAndRemove(deletedId, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('successful')
            res.redirect('/')
        }
    })
})



app.get('/update', (req, res) => {

    const PORT = 3000
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const q = uniRl.parse(fullUrl , true)
    const qdata = q.query




    res.render('update', )
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log('Server started')
})