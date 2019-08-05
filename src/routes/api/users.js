const router = require('express').Router();
const User = require("../../db/models/User");

router.get('/', (req,res) => {
    User.findAll()
    .then((users) => {
        console.table(users);
    })
    res.send({"User": "Api Working"});
})

module.exports = router;