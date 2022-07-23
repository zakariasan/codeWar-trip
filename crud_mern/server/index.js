const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');

const mongoose = require('mongoose')
const uri = 'mongodb+srv://crudyApp:w6SQzyVAStxelspx@crud.hlrdvan.mongodb.net/?retryWrites=true&w=majority'

const FoodModel = require('./models/Food');

app.use(express.json())

mongoose.connect(uri, {useNewUrlParser: true})

app.use(cors);
// set UP madlewars ...

// recive info from front End with json format


app.post('/insert', async function(req, res) {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodModel({foodName:foodName, daysAte : days});

    try{
        await food.save();
        res.end('data send it')
        console.log('try rtyr')
    }catch (err){ console.log(err) }

  res.send('Hello World! 123')
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});




//app.get("/", async (req, res)=> {
    ////
//})

//app.listen(PORT, ()=> {console.log(`Server running on PORT: ${PORT}...`)});

