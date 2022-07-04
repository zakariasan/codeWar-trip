const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Data base Stuff
const uri =
  "mongodb+srv://Yoda:yoda_Username@cluster0.mwzgtn3.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, (err, client) => {
  if (err) return console.error(err);
  const db = client.db("star-wars-quotes");
  const quotesCollection = db.collection("quotes");

  //hi hello i want to use EJS to generate ower HTML thanks
  app.set("view engine", "ejs");

  app.use(bodyParser.json());
  //Get me all files need it for me js css and also me
  app.use(express.static("public"));
  // Body-parser baby
  app.use(bodyParser.urlencoded({ extended: true }));
  //GET operation
  app.get("/", (req, res) => {
    //res.send('Hello zak')
    db.collection("quotes")
      .find()
      .toArray()
      .then((r) => res.render("index.ejs", { quotes: r }))
      .catch((err) => console.log(err));
    //res.sendFile(__dirname + '/index.html')
  });

  app.post("/quotes", (req, res) => {
    quotesCollection
      .insertOne(req.body)
      .then((result) => console.log(result))
      .then((result) => res.redirect("/"))
      .catch((err) => console.log(err));
  });

  app.put("/quotes", (req, res) => {
    quotesCollection
      .findOneAndUpdate(
        { name: "Yoda" },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote,
          },
        },
        {
          upsert: true,
        }
      )
      .then((result) => res.json("Success"))
      .catch((error) => console.error(error));
  });

  app.delete("/quotes", (req, res) => {
    quotesCollection
      .deleteOne({ name: req.body.name })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.json("No quote to delete");
        }
        res.json("Deleted Darth Vadar's quote");
      })
      .catch((error) => console.error(error));
  });

  // Listen on app
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on Port ${PORT}  Time to codeOn`)
  );
});
