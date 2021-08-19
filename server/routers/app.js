const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const Contact = require("../models/contacts");
require('dotenv').config({ path: './server/.env'});
//CONNECT TO MONGO
const dbURI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@here2.rhlys.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 })
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err))
app.listen(5050, () => {
    console.log('Listening on port 5050')
});
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//GET handler Home page
app.get("/", (req, res) => {
    res.send('<p>Home Page</p>');
});
app.use("/", router);

//contacts routes
app.get('/contacts', (req, res) => {
    const contacts = new Contact({
        contactName: 'Jeremy',
        contactId: '3',
        contactPhoneNumber: '716-555-0000',
        isContact: true
    });
    contacts.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

//POST Handler Template
//app.post('/', (req, res) => { 
    //const form = new Form(req.body);
    
    //form.save()
    // .then((result) => {
    //    res.redirect('/<next page>')
  //  }) 
    //.catch((err) => {
        //console.log(err);
    //})    
//})

//DELETE Request template
// app.delete('/.id', (req, res) => {
//     const  id = req.params.id;
//     Form.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: '/<new form>'})
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })



app.use((req, res) => {
    res.status(404)
});