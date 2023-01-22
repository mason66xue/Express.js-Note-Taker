const router= require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all notes
// https://localhost:3001/api/notes
router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Get route for retrieving one note
// https://localhost:3001/api/notes/id
router.get('/:notes', (req, res) => {
  const notesId = req.params.notes_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes => notes.notes_id === notesId));
      return result.length > 0
        ? res.json(result)
        : res.json('Error');
    });
});

// DELETE Route for a specific tip
// https://localhost:3001/api/notes/asdvasd3r22
router.delete('/:id', (req, res) => {
  const notesId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((notes) => notes.notes_id !== notesId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${notesId} has been deleted 🗑️`);
    });
});

// POST Route for a new UX/UI tip
router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

    const newNote = {
      title,
      text,
      id: uuidv4()
    }
    console.log(newNote, "new note")
    readAndAppend(newNote, './db/db.json');
    res.json(`Note is added 🚀`);

});

module.exports = router;
