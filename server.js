const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const uniRl = require('url')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`));
mongoose.connect('mongodb+srv://Yigalanshey:85864537He@cluster0.3wppw9b.mongodb.net/?retryWrites=true&w=majority/ums')

let customers = []

// https.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5b7494bfba6561483ff193b9a5b88d7b&units=metric', (response) => {
//     response.on('data', (data) => {
//         const weatherData = JSON.parse(data)
//         console.log(weatherData.weather[0].main)
//     })
    
// })

const userSchema = {
    name: String,
    email: String,
    gender: String,
    status: String,
    modified: Boolean
}

const Users = mongoose.model('User', userSchema)

// users.insertMany(userone, (err , res) => {
//     if(err){
//         console.log('STFU bitch')
//     }else{
//         console.log('saved succesfullly')
//     }
// })

app.post('/' , (req, res) => {
    const inputData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        modified: false
    }
    const inputs = new Users(inputData);
    
    inputs.save()

    res.redirect('/')
})

app.post('/delete' , (req , res) => {
    console.log(req.body)
    const deletedId = req.body.deleted

    Users.findByIdAndRemove(deletedId, (err) => {
        if(err){
            console.log('Ha ha')
        }else{
            console.log('successful')
            res.redirect('/')
        }
    })
})


app.get('/', (req, res) => {
    Users.find({'id': 1}, (err, userDatas) => {
        res.render('ums', {userDAta : userDatas})
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



    res.render('update')
})

app.post('/update', (req, res) => {

    const PORT = 3000
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const q = uniRl.parse(fullUrl , true)
    const qdata = q.query

    const inputData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        modified: true
    }

    Users.updateOne(
        {id: qdata.id},
        {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status,
            modified: true
        },
        (err,  docs) => {
            if(err){
                console.log(err)
            }else{
                console.log(docs)
            }
        }
    )

    res.redirect('/')

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () =>{
    console.log('Server started')
})