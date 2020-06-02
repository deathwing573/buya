const express = require('express')
const app = express()
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App listening on port 5000!');
});
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

app.use(express.urlencoded({extended:false}))

app.use('/', require('./Routers/get_landing_page'))