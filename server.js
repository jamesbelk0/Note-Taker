// Required NPM
const express = require('express');

// PORT and ROUTES
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes); 


// Listener
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`)
})