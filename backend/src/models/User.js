const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);