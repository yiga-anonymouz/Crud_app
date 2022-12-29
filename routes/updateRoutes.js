const users = require("../models/ums")
const PORT = 3000


app.get('/update', (req, res) => {
    
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`

    const q = uniRl.parse(fullUrl , true)
    const qdata = q.query




    res.render('update', )
})

app.post('/update', (req, res) => {
    
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