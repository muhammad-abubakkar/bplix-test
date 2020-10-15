const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bplix', {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', err => {
  console.log('Database connection failed');
  process.exit(1)
})

db.once('open', () => {
  console.log('Database connected')
})