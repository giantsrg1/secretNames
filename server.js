//required packages ====================
const express = require('express');
const path = require('path');

//init app ====================
const app = express();
const port = process.env.PORT || 8080;
app.use(morgan('tiny')); //logging

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

//routes ====================
//main route
app.get('/', (req, res) => {
    res.render('index');
});


// Start server ====================
app.listen(port, () => {
    console.log('Server started on port ' + port + '...')
});