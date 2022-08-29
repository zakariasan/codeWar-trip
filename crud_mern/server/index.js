const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv").config();
const port = process.env.PORT || 2121;

const cors = require("cors");

//const FoodModel = require('./models/Food');
    //============================
    //Connect to data base
    //============================

MongoClient.connect(process.env.MG_URI, { useNewUrlParser: true })
  .then((client) => {
    console.log("dataBase Connected");
    //============================
    //MiddleWare
    //============================
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors({ origin: "http://localhost:3000", credentials: true }));

    const db = client.db('Foods-category');
    const foodCols = db.collection('foody');

    //============================
    //Routers 
    //============================

    app.post("/insert", function (req, res) {
      const foodName = req.body.foodName;
      const days = req.body.days;

      foodCols.insertOne({foodName, days}).then(result => {
        console.log(result);
        //res.redirect('/')

      }).catch(err => console.log(err))
      console.log("Good good");

      //const food = new FoodModel({ foodName: foodName, daysAte: days });

      //try {
      //await food.save();
      //res.end("data send it");
      //console.log("try rtyr");
      //} catch (err) {
      //console.log(err);
      //}
      res.send("Hello World! 123");
    });

    //======================
    //listen
    //======================

    app.listen(port, function () {
      console.log(`Example app listening on port ${port}!`);
    });
  })
  .catch((err) => console.error(err));
// set UP madlewars ...

// recive info from front End with json format

//app.get("/", async (req, res)=> {
////
//})

//app.listen(PORT, ()=> {console.log(`Server running on PORT: ${PORT}...`)});
