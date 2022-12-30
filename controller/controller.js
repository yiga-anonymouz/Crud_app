const { model } = require("mongoose")
const Users = require(`${__dirname}/models/ums`)
const emailvalidator = require("email-validator")
const uniRl = require('url')


const PORT = 3000

const ums_index = (req, res) => {
    Users.find({'id': 1})
        .then((userDatas) => {
            res.render('ums', {userDAta : userDatas})
        })
        .catch((err) => {
            console.log(err)
        })
}

const ums_insert = (req, res) => {

    const validatedEmail = emailvalidator.validate(req.body.email)

    if(validatedEmail){
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
    }else{
        console.log('email not valid')
    }
    
}

const ums_update_index = (req, res) => {
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const q = uniRl.parse(fullUrl , true)
    const qdata = q.query




    res.render('update', )
    
}

const ums_update_insert = (req, res) => {
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const q = uniRl.parse(fullUrl , true)
    const qdata = q.query

    const validatedEmail = emailvalidator.validate(req.body.email)

    if(validatedEmail){
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
            })
            .then((docs) => {
                console.log(docs)
            }) 
            .catch((err) => {
                console.log(err)
            })

        res.redirect('/')
    }else{
        console.log('email not valid')
    }

}

const ums_delete = (req , res) => {
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
}

const not_found = (req, res) => {
    res.render('404')
}

module.exports = {
    ums_index,
    ums_insert,
    ums_update_index,
    ums_update_insert,
    ums_delete,
    not_found
}