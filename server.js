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
app.use(express.static('public'));

// Routes
const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js');

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/',htmlRoutes)

// Listener
app.listen(PORT, function() {
    console.log("Note-Taker launch on PORT: ${PORT}")
})