const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    createrId:{type: mongoose.Types.ObjectId, required: true}
});


const NoteModel = mongoose.model('Notes', noteSchema);

module.exports = NoteModel;
