var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
router.user(bodyParser.json());

var User = require('./User');

module.exports = router;

router.post('./', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }),
  (err, user)  => {
    if (err) return res.status(500).send("There was problem adding information to the database");
    res.status(200).send(user);
  }
});
