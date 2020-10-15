const fs = require('fs')
const readline = require('readline')
const UserModel = require('./models/user')
const FriendModel = require('./models/friends')

require('./db')

const reader = readline.createInterface({
  input: fs.createReadStream('./data.csv'),
  console: false,
})

let data = []

reader.on('line', line => {
  data.push(line.split(','))
})

reader.on('close', () => {
  let records = data.slice(1)
    .map(record => ({
      name: record[0], 
      age: Number(record[1]), 
      location: record[2]
    }))

  UserModel.insertMany(records).then(() => {
    console.log(records.length + ' records inserted successfully')
  }).catch(err => {
    console.log(err.message)
  })
})



