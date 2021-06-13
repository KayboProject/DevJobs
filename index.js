const express = require('express');
const exphbs = require('express-handlebars');
const esphbs = require('express-handlebars');
const router = require('./routes');
const path = require('path');

const app = express();


// habilitar handlebars como view
app.engine('handlebars', 
    exphbs({
        defaultLayout: 'layout'
    })
);

app.set('view engine', 'handlebars');

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(5000);