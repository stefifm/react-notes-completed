const { Router } = require('express');
const router = Router();

const { getNotes, createNotes, getSingle, updateNotes, deleteNote } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNotes)


router.route('/:id')
    .get(getSingle)
    .put(updateNotes)
    .delete(deleteNote)



module.exports = router; 