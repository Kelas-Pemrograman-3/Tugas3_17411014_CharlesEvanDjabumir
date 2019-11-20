const mahasiswa = require('express').Router()

const mahasiswacontroller = require('../controller/mahasiswacontroller')

mahasiswa.post('/simpan', (req, res) => {
  mahasiswacontroller.simpandata(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})



module.exports = mahasiswa