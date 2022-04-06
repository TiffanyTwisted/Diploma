const sequelize = require("../db/config/config");
const {DataTypes} = require('sequelize');

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        school_id: {
            type: DataTypes.INTEGER
        },
        application_id: {
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING
        },
        middle_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Invalid email. Provide a correct email.",
                    async isUnique(value) {
                        const user = await User.findOne({
                            where: {
                                email: value
                            }
                        });
                        if (user) {
                            throw new Error("A user with that email already exists.");
                        }
                    }
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [
                        6, 100
                    ],
                    msg: "Password should be more than 5 characters."
                }
            }
        },
        admin_flag: {
            type: DataTypes.BOOLEAN
        },
        photo: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    });
    
    module.exports = { User}
