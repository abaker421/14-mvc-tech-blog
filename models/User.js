const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt= require('bcrypt')

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    },
    userPosts: {
        type:DataTypes.ARRAY(DataTypes.INTEGER),
        references: {
            model: 'post',
            ker: 'id'
        }
    }
},
{
    hooks: {
        beforeValidate: async (userData) => {
            userData.password = await bcrypt.hash(userData.password, 10)
            return userData
        },
        beforeUpdate: async (userData) => {
            userData.password = await bcrypt.hash(userData.password, 10)
            return userData
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
})

module.exports= User