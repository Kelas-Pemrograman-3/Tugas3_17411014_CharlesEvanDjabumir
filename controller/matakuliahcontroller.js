const matakuliahmodel = require('../models/MataKuliahModel')
const mongoose = require('mongoose')

exports.simpanmatakuliah = (data) =>
new Promise((resolve, reject) => {
  matakuliahmodel.create(data)
  .then(res => {
    resolve ({error:false, pesan: 'Data Berhasil Tersimpan'})
  })
  .catch(res => {
    reject({error:true, pesan: 'Data Tidak Tersimpan'})
  })
})