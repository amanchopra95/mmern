const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(require('./src/middlewares/Logger').logger);

// Use Routes
app.get('/', (req,res) => {
    res.send("Index Page");
})

app.use('/login', require('./src/controllers/loginController'));
app.use('/register', require('./src/controllers/signupController'));
app.use('/api', require('./src/routes/routes'));


// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));
}

app.listen(5000, function() {
    console.info("Rocking on port 5000: http://localhost:5000");
})