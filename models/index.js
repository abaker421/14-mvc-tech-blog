const User = require('./User.js')
const Post = require('./Post.js')

User.hasMany(Post, {
    foreignKey: 'authorId'
})

Post.belongsTo(User, {
    foreignKey: 'userPosts'
})

module.exports= { User, Post }