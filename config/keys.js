
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://zak:Iampowerful1211%21@cluster0-wmxwc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// module.exports="mongodb+srv://zak:Iampowerful1211%21@cluster0-wmxwc.mongodb.net/test?retryWrites=true&w=majority"