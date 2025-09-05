const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = mongodb.getDatabase().db().collection('contacts');
  result.find().toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = mongodb.getDatabase().db().collection('contacts');
  result.find({ _id: userId }).toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
};

module.exports = {
  getAll,
  getSingle
};