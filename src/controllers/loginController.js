const router = require('express').Router();
const User = require('../db/models/User');
const authService = require("../services/authService");
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    return res.json(req);
})

router.post('/', (req, res) => {
    let email = req.body.email;
    User.findOne({
        where: {
            email: email
        }
    })   
    .then(async (user) => {
        if (!user) {
            res.status(401).json({message: "User doesn't exist"})
        } else {
            let match = await authService.compare2hash(req.body.password, user.password);
            if (!match) res.status(401).json({message: "User or Password does not match!"})
            let userJson = user.toJSON();
            let tokenUser = {
                email: user.email,
                firstName: userJson.firstName,
                lastName: userJson.lastName,
                userId: userJson.id
            }
            
            let token = jwt.sign(tokenUser, "This is a secret");
            res.json({tokenUser, token});
        }
    }) 
    .catch((err) => {
        console.error(err);
        res.json({message: "Unable to connect with Database"});
    })
})

module.exports = router;