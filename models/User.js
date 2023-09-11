const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt= require('bcrypt')

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

User.init({
    id:{},
    name: {},
    email: {},
    password:{},
},
{
    hooks: {},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
})

module.exports= User