const express = require('express');

const apiRouter = express();

apiRouter.use('/users', require('./api/users'));
apiRouter.use('/posts', require('./api/posts'));

module.exports = apiRouter;