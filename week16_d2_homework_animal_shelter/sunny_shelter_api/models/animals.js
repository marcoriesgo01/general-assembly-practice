const mongoose = require('mongoose')

const animalSchema = mongoose.Schema({
    name: String,
    species: String,
    breed: String,
    image: {type: String, default: 'https://loremflickr.com/240/120'},
    age: {type: Number, default: 0},
    adopted: {type: Boolean, default: false},
    personalityTraits: [{type: String}]
})

module.exports = mongoose.model('Animal', animalSchema)