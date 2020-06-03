const express = require('express')
const app = express()
const PORT= process.env.PORT || 5000;
var path = require('path');
var querySelectorAll = require('query-selector');
var jsdom = require("jsdom").jsdom;
app.listen(PORT, () => {
    console.log('App listening on port 5000!');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(path.join(__dirname, 'node_modules')))




app.use(express.urlencoded({extended:false}))

app.use('/', require('./routers/get_landing_page'))