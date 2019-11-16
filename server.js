const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//Basic server if given a url or listen on local 8080
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//Server files from this path
app.use(express.static(path.join(__dirname, './public/')))

app.listen(port, () => console.log(`Listening on port ${port}`));