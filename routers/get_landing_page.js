const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {

    

    res.render('content.ejs');

    
});

module.exports = router;