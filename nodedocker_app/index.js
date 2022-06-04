const express = require('express');
const port = 3000
const mongoose = require('mongoose');
/*const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017';
const dbName = 'nhok8t1';
const client = new MongoClient(url);*/
const app = express();
//const assert = require('assert');
app.set('view engine', 'ejs');
/*app.get('/', (req, res) => {
    res.render('index')
})*/
app.use(express.urlencoded({ extended: false }));
mongoose
    .connect(
        'mongodb://mongo:27017/nhok8t1',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
/*app.get('/', (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('student');
    collection.find({}).toArray(function (err, item_list) {
        assert.equal(err, null);
        res.render('index', { 'items': item_list });
    });
});*/
const Item = require('./models/Item');
app.get('/', (req, res) => {
    Item.find()
      .then(items => res.render('index', { items }))
      .catch(err => res.status(404).json({ msg: 'No items found' }));
  });
/*const port = 3000;*/
app.listen(port, () => console.log('Server running...'));
/*client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connect succesfully to Mongo Database");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
});*/