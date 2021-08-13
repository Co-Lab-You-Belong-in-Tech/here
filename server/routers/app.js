const express = require("express");
const morgan = require('morgan');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();


app.listen(5050, () => {
    console.log('Listening on port 5050')
});
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//GET handler
app.get("/", (req, res) => {
    res.send('<p>Home Page</p>');
});
app.use("/", router);

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