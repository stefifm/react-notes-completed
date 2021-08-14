const notesCtrl = {};

const Note = require('../models/Note');


notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};
notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save(); 
    res.json({message: 'Nota guardad'})
};

notesCtrl.getSingle = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}

notesCtrl.updateNotes = async (req, res) => {
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author
    });
    res.json({message: 'Nota actualizada'})
}


notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id})
    res.json({message: 'Nota eliminada'})
}


module.exports = notesCtrl;