const express = require('express');
const router = express.Router();

const userController = require('../controllers/contacts')

router.get('/', userController.getAll);

router.get('/:id', userController.getSingle);

module.exports = router;




// const database = require('../data/database');

// router.get('/', async (req, res) => {
//   try {
//     const db = database.getDatabase().db();
//     const contacts = await db.collection('contacts').find({}).toArray();
//     res.status(200).json(contacts);
//   } catch (err) {
//     console.error('Error al obtener los contactos:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;