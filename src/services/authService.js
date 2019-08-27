const bcrypt = require('bcrypt');
const SALT_ROUNDS = 8;

function convert2hash(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}

function compare2hash(password, hash) {
    return bcrypt.compare(password, hash);
}

function emailExists(email) {
    
}

module.exports = {
    convert2hash,
    compare2hash
}