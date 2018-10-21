const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();

console.log(obj);
MongoClient.connect('mongodb://localhost:27017/Todo', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conencted to MongoDB succesfully');
    const db = client.db('Todos');

    // db.collection('Todos').find({}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos count: ${count}`);
        // console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    client.close();
});