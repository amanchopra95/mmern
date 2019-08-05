const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.get('/', (req,res) => {
    res.send("Index Page");
})
app.use('/users', require('./src/routes/api/users'));
app.use('/posts', require('./src/routes/api/posts'));

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));
}

app.listen(5000, function() {
    console.info("Rocking on port 5000: http://localhost:5000");
})