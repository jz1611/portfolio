require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const express = require('express');

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();

// app.use(require('body-parser').text());
// app.use(express.json());

MongoClient.connect(CONNECTION_STRING, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to database.');
        app.set('db', client.db('portfolio-posts'));

        app.get('/api/test', (req, res) => {
            res.status(200).send('Test works')
        });

        app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));
    })
    .catch(error => console.error(error));