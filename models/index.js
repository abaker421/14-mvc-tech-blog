const User = require('./User.js')
const Post = require('./Post.js')

User.hasMany(Post, {
    foreignKey: ''
})

Post.belongsTo(User, {
    foreignKey: ''
})

module.exports= { User, Post }