require('dotenv').config();
const path = require('path'); // Usually moved to the start of file
const express = require('express');

const { SERVER_PORT } = process.env;
const app = express();

app.use(require('body-parser').text());
app.use(express.json());

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}...`));