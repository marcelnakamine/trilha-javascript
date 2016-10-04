'use strict';

const User = require('../model/user-model');
const ctrl = {};

ctrl.getUsers = (req,res) => {
  res.send(User.get(req.query.name));
};

ctrl.getUser = (req,res) => {
  res.send(User.getById(req.params.id));
}

ctrl.saveUser = (req,res) => {
  new User(req.body.name, req.body.profile).save();
  res.send(req.body);
};

ctrl.updateUser = (req,res) => {
  let user = new User(
    req.body.name,
    req.body.profile
  );

  user.id = req.params.id;

  user.update();

  res.send(req.body);
}

ctrl.removeUser = (req,res) => {
  User.remove(req.params.id);
  res.send();
}

module.exports = ctrl;
