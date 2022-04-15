// Required NPM
const express = require('express');
const fs = require('fs');
const path = require('path');

// Start Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('__dirname'));

// Routes
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api')

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes); 

// Listener
app.listen(PORT, function() {
    console.log(`Server is live on port ${PORT}!`)
})