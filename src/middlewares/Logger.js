module.exports = {
    logger: (req, res, next) => {
        console.log("Request: ", req);
        next();
    }
};