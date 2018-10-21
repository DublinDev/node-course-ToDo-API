const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();

console.log(obj);
MongoClient.connect('mongodb://localhost:27017/Todo', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Conencted to MongoDB succesfully');
    const db = client.db('Todos');

    // db.collection('Todos').insertOne({
    //     text: 'Something to print',
    //     completed: false
    // }, (err,result) => {
    //     if(err){
    //         return console.log('Unable to inset todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    //name age locations
    // db.collection('Users').insertOne({
    //     name: 'Sean',
    //     age: 27,
    //     location:'Dublin'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to inset todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});