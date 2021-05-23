const UsersModel = require("../models/usersModel");

const readOne = async function (req, res) {
  try {
    const id = req.params.id;
    const readUser = await UsersModel.findOne({ _id: id });

    if (!readUser) {
      return res.status(404).send();
    } else {
      res.status(200).send(readUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const read = async function (req, res) {
  try {
    const readUser = await UsersModel.find();

    if (!readUser) {
      return res.status(404).send();
    } else {
      res.status(200).send(readUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { read, readOne };
