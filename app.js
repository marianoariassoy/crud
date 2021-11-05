const express = require('express');
const hbs = require('hbs');
const app = express(); 

// Motor de plantilla
app.set('view engine', 'hbs');

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Router
app.use("/", require("./router"));

// Puerto
require('dotenv').config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});






