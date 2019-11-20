const matakuliah = require('express').Router()

const matakuliahcontroller = require('../controller/matakuliahcontroller')

matakuliah.post('/simpanmk', (req, res) => {
  matakuliahcontroller.simpanmatakuliah(req.body)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

module.exports = matakuliah