const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        unique: true,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    size: {
        type: Number,
        required: false
    }

})

module.exports = UploadModel = mongoose.model('uploads', uploadSchema);