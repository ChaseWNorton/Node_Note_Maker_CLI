const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json', originalNoteString);

const noteString = fs.readFileSync('./note.json');

const note = JSON.parse(noteString)

console.log(note)