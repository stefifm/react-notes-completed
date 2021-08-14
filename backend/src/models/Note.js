const mongoose = require('mongoose');

const { Schema } = mongoose;


const noteSchema = new Schema({
    title : String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true

});




module.exports = mongoose.model('Note', noteSchema);