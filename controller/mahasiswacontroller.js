const mahasiswamodel = require('../models/MahasiswaModel')
const mongoose = require('mongoose')

exports.simpandata = (data) =>
new Promise((resolve, reject) => {
  mahasiswamodel.create(data)
  .then(res => {
    resolve ({error:false, pesan: 'Data Berhasil Tersimpan'})
  })
  .catch(res => {
    console.log(error)
    reject ({error:true, pesan: 'Data Tidak Tersimpan'})
  })
})


