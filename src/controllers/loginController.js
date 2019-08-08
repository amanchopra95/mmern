const router = require('express').Router();
const authenticate = require('../services/authService');

router.get('/', (req, res) => {
    return res.json(req);
})

router.post('/', (req, res) => {
    let user = req.body.user;
    let password = req.body.password;

    return authenticate(user, password);
})

module.exports = router;