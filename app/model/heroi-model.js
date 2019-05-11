const mongoose = require('mongoose');

const HeroiSchema = mongoose.Schema({
    nome: {
        type: String,
        unique: true,
        required: true
    },
    superpoder: {
        descricao: {
            type: String,
            unique: false,
            required: true
        },
        habilidades: {
            type: [String],
            unique: false,
            required: false
        },
        nivel: {
            type: Number,
            unique: false,
            required: false
        }
    }
});

module.exports = mongoose.model('heroi', HeroiSchema);
