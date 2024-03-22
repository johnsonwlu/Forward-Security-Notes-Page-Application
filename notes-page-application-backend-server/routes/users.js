var express = require('express');
var router = express.Router();

/* GET users listing. */


var users = [
  
  {id: 1711099199480, title: "23", content: "23"}
]

router.get('/', function(req, res, next) {
  res.status(200).send(users);
});

router.post('/', function(req, res, next) {
  users.push(req.body);
  const item = users.filter((note) => note.id === req.body.id);
  res.status(201).send(item);
})

router.delete('/:id', function(req, res, next) {

  users = users.filter((note) => (note.id !== Number(req.params.id)));

  res.status(204).send();
})

module.exports = router;
