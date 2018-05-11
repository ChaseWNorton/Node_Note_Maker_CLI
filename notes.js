console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync(`notes-data.json`);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync(`notes-data.json`, JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  if (notes.every(ele => ele.title !== note.title)) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes()
};

const read = title => {
  const notes = fetchNotes();
  if (notes) {
    for (let note of notes) {
      if (note.title === title) {
        return note.body
      }
    }
  }
  return false
};

const remove = title => {
  const notes = fetchNotes();
  let filteredNotes = [];

  if (notes === undefined || notes.length === 0) {
    console.log("No notes to remove");
  } else {
    filteredNotes = notes.filter(ele => ele.title !== title);
    if (filteredNotes.length === notes.length) {
      console.log('No note found with that title')
    } else {
      console.log(`Removing ${title}`)
      fs.writeFileSync(`notes-data.json`, JSON.stringify(filteredNotes))
      return true
    }
  }
  return false;
};

module.exports = { addNote, getAll, read, remove };
