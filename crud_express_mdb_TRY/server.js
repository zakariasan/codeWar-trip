const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//Data base Stuff 
const uri = 'mongodb+srv://Yoda:yoda_Username@cluster0.mwzgtn3.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(uri, (err,client)=>{
    if(err) return console.error(err);
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    console.log('Connected to Database yay!')

// Body-parser baby
app.use(bodyParser.urlencoded({ extended : true }))
//GET operation
app.get('/', (req, res)=> {
    //res.send('Hello zak')
    db.collection('quotes').find().toArray()
        .then(r => console.log(r))
        .catch(err => console.log(err))
    res.sendFile(__dirname + '/index.html')
})


app.post('/quotes', (req, res)=> {
    quotesCollection.insertOne(req.body)
        .then(result => console.log(result))
        .then(result=> res.redirect('/'))
        .catch(err => console.log(err));

})



// Listen on app
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}  Time to codeOn`));

})

