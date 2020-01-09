const express = require('express');
const path = require('path');
const { config } = require('./src/config')
const errorHandler = require('./src/middlewares/errorHandler')
const logger  = require('./src/middlewares/logger')
// Initializing environment variables
config()

const db = require('./src/db/models/index');

// Routers
const auth = require('./src/routes/auth')

const app = express();

app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/public')));
}

app.use('/api/v2/auth', auth)
app.use(errorHandler)

let server = {}

db.sequelize.authenticate(() => console.log("Database connected"))
.then(() => {
    server = app.listen(5000, function() {
        console.info("Rocking on port 5000: http://localhost:5000");
    })
})
.catch((err) => {
    console.error('Couldn\'t connect to database', err);
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})