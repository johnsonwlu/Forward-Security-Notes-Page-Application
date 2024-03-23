var express = require('express');
var router = express.Router();
var fs = require('fs');

var users = [
  
];

fs.readFile('data.txt', 'utf8', (err, fileData) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    try {
      users = fileData ? JSON.parse(fileData) : []; 
      console.log('Data loaded from file:', users);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});

router.get('/', function(req, res, next) {
  res.status(200).send(users);
});

router.post('/', function(req, res, next) {
  users.push(req.body);

  fs.writeFile('data.txt', JSON.stringify(users, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file:', users);
    }
  });

  const item = users.filter((note) => note.id === req.body.id);
  res.status(201).send(item);
});

router.delete('/:id', function(req, res, next) {
  users = users.filter((note) => (note.id !== Number(req.params.id)));

  fs.writeFile('data.txt', JSON.stringify(users, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file:', users);
    }
  });

  res.status(204).send();
});

router.put('/:id', function(req, res, next) {
  const noteId = Number(req.params.id);
  const { title, content } = req.body;

  const updatedNoteIndex = users.findIndex(note => note.id === noteId);

  if (updatedNoteIndex !== -1) {
    users[updatedNoteIndex].title = title;
    users[updatedNoteIndex].content = content;

    fs.writeFile('data.txt', JSON.stringify(users, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        res.status(500).send('Error updating note in file');
      } else {
        console.log('Data written to file with updated note:', users[updatedNoteIndex]);
        res.status(200).send(users[updatedNoteIndex]);
      }
    });
  } else {
    res.status(404).send('Note not found');
  }
});

module.exports = router;
