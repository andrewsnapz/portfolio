const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../index.html'))
});

app.use( '*', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`I am listening to port ${port}`);
});