const router = require('express').Router();

router.get('/', (req,res) => {
    const posts = [
        {
          'id': 1,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 2,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 3,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 4,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 5,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 6,
          'title': 'title 1',
          'description': 'Some description'
        },
        {
          'id': 7,
          'title': 'title 1',
          'description': 'Some description'
        },
      ]
    res.json(posts);
})

module.exports = router;