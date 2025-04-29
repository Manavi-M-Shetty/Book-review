const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // assuming your user model is named "User"
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // assuming your book model is named "Book"
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Review", reviewSchema);

