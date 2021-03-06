//required packages ====================
const express = require('express');
const path = require('path');
const morgan = require('morgan');

//init app ====================
const app = express();
const port = process.env.PORT || 8111;
app.use(morgan('tiny')); //logging

// set public folder
app.use(express.static(path.join(__dirname, '/public')));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

//routes ====================
//main route
app.get('/', (req, res) => {
    res.render('index');
});


// Start server ====================
app.listen(port, () => {
    console.log('Server started on port ' + port + '...')
});