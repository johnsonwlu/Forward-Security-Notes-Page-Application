var express = require('express');
var router = express.Router();
var fs = require('fs');

var users = [];

var fileDirectory = 'data.txt';

function loadDataFromFile() {
  fs.readFile(fileDirectory, 'utf8', (err, fileData) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log('Data file not found, creating new file...');
        saveDataToFile(); 
        return;
      }
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
}


function saveDataToFile() {
  fs.writeFile(fileDirectory, JSON.stringify(users, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data file created and data saved:', users);
    }
  });
}

loadDataFromFile();

router.get('/', function(req, res, next) {
  res.status(200).send(users);
});

router.post('/', function(req, res, next) {
  users.push(req.body);
  saveDataToFile(); 
  const item = users.filter((note) => note.id === req.body.id);
  res.status(201).send(item);
});

router.delete('/:id', function(req, res, next) {
  users = users.filter((note) => note.id !== Number(req.params.id));
  saveDataToFile(); 
  res.status(204).send();
});

router.put('/:id', function(req, res, next) {
  const noteId = Number(req.params.id);
  const { title, content } = req.body;
  const updatedNoteIndex = users.findIndex(note => note.id === noteId);

  if (updatedNoteIndex !== -1) {
    users[updatedNoteIndex].title = title;
    users[updatedNoteIndex].content = content;
    saveDataToFile(); 
    res.status(200).send(users[updatedNoteIndex]);
  } else {
    res.status(404).send('Note not found');
  }
});

module.exports = router;
