const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000

const mongooseurl = 'mongodb://127.0.0.1/dblatihan'

mongoose.connect(mongooseurl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('connect mongodb'))
.catch((err) => console.log(err))

server.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

server.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))

const mhs = require('./router/mahasiswa')
const mk = require('./router/matakuliah')

server.use('/mahasiswa', mhs)
server.use('/matakuliah', mk)


server.listen(port, function () {

    console.log('server starting on port ' + port)

})