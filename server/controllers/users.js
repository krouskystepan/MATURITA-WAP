exports.createUser = (req, res) => {
  res.send('user created');
};

exports.getAllUsers = (req, res) => {
  res.send('get all users');
};

exports.getUserById = (req, res) => {
  res.send('get user ' + req.params.id);
};

exports.deleteUser = (req, res) => {
  res.send('deleted user ' + req.params.id);
};

exports.updateUser = (req, res) => {
  res.send('updated user ' + req.params.id);
};
