console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv
const notes = require('./notes.js');

const command = argv._[0];

if(command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Successfully added ${argv.title}`)
  } else {
    console.log(`Duplicate title.  Please try again`)
  }
} else if (command === 'list') {
  const noteList = notes.getAll();
  noteList ? noteList.forEach(ele => console.log(ele.title)) : console.log('Error retriving the list')
} else if (command === 'read') {
  const note = notes.read(argv.title);
  note ? console.log(note) : console.log('Error in reading')
} else if (command === 'remove') {
  const noteRemoved = notes.remove(argv.title)
  const message = noteRemoved ? 'Note was removed' : 'Note was not removed'
  console.log(message)
} else console.log(`Command not recognized`);


