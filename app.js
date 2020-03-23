const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://author:' +
    process.env.MONGO_ATLAS_PW +
    '@cluster0-shard-00-00-0saxk.mongodb.net:27017,cluster0-shard-00-01-0saxk.mongodb.net:27017,cluster0-shard-00-02-0saxk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    { useUnifiedTopology: true }
);


app.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
});


module.exports = app;