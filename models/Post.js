const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init({

id: {},
title: {},
content: {},
authorId: {},
dateCreated: {}
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