const express = require('express')
const path = require('node:path')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://nkerstiens1:Mag00329@cluster-op.m3cyrwk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express()

let cxn = "" 

console.log("in our app, yo!")

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  console.log("we connected");


  //grab actual data from db...
    cxn = " we did it";

  client.close();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.set('view engine', 'ejs');


app.get('/', function (req, res) {

    console.log("in our app)");

res.send(cxn);

})


app.listen(process.env.PORT || 3000,
  () => console.log("Server is running..."));



