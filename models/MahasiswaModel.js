const mongoose = require('mongoose')

const schema = mongoose.Schema

const mahasiswaSchema = new schema({
  npm: {
    type: String
  },
  nama: {
    type: String
  },
  password: {
    type: String
  },
  prodi: {
    type: String
  }
})

module.exports = mongoose.model('mahasiswa', mahasiswaSchema)