const mongoose = require('mongoose')

const bookmarkSchema = mongoose.Schema({
  name: String,
  email: String
})

module.exports = mongoose.model('Bookmark', bookmarkSchema)