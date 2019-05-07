const mongoose = require('mongoose');

const HeroSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        unique: false,
        required: false
    },
    superpower: {
        description: {
            type: String,
            unique: false,
            required: true
        },
        abilities: {
            type: [String],
            unique: false,
            required: false
        }
    }
});

module.exports = mongoose.model('Hero', HeroSchema);
