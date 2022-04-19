const { user } = require("../database/models/user.model");

exports.getUser = (req, res) => {
  const id = req.params.userId;

  user.findByIdAndRemove(id, (err) => {
    if (err) {
      res.send("ERROR");
    } else {
      res.send("SUCCESS");
    }
  });
};
