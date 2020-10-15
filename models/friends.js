const {Schema, model, Types} = require('mongoose')

const FriendSchema = new Schema({
  id: Types.ObjectId,
  friendId: Types.ObjectId,
})

const FriendModel = model('Friend', FriendSchema)

module.exports = FriendModel