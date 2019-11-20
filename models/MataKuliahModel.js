const mongoose = require('mongoose')

const schema = mongoose.Schema

const MataKuliahSchema = new schema({
  namaMk: {
    type: String
  },
  jamMk: {
    type: String
  },
  hari: {
    type: String
  },
  ruangan: {
    type: String
  },
  idDosen: {
    type: String
  },
  namaDosen: {
    type: String
  }
})

module.exports = mongoose.model('matakuliah', MataKuliahSchema)