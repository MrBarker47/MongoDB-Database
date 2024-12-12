const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter the book name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },
    }
);