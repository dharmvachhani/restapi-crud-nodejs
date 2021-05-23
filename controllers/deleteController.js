const UsersModel = require("../models/usersModel");

module.exports = async function (req, res, next) {
  try {
    const deleteUser = await UsersModel.findByIdAndRemove(req.params.id);

    if (!deleteUser) {
      return res.status(400).send();
    } else {
      res.status(200).send(deleteUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
