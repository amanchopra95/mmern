const router = require('express').Router();
const User = require('../db/models/User');
const authService = require('../services/authService');
const singupService = require('../services/authService');

router.post('/', (req, res) => {

    authService.convert2hash(req.body.password)
    .then((hash) => {
        console.log(hash);
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
        })
        .then((created) => {
            if (!created) res.status(401).json({message: "User already exists!"})
            res.json({message: "User Creates"})
        })
    })
    .catch((err) => console.error(err));
})

module.exports = router;