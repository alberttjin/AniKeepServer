const mongoose = require('mongoose')

const animeSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    ep: {
        type: Number,
    },
    url: {
        type: String,
    },
})

const Anime = mongoose.model('Anime', animeSchema)

module.exports = Anime