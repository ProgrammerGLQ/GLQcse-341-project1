// const router = require('express').Router();

// router.use('/contacts', require('./contacts'));

// router.get('/', (req, res) => {
//   res.send('Hello world');
// });

// module.exports = router;


const router = require ('express').Router();

// router.get('/', (req, res) => {res.send('Helo world')});

router.use('/contacts', require('./contacts'))

module.exports = router; 