const UsersModel = require("../models/usersModel");

module.exports = async function (req, res, next) {
  try {
    const users = new UsersModel(req.body);
    const createUser = await users.save();

    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
};
