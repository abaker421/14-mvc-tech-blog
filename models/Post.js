const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init({

id: {
    type:DataTypes
},
title: {
    type:DataTypes
},
content: {
    type:DataTypes
},
authorId: {
    type:DataTypes
},
dateCreated: {
    type:DataTypes
}
},
{
    hooks: {},
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}
)

module.exports= Post