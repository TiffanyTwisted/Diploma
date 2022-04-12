const sequelize = require("../db/config/config");
const {DataTypes} = require('sequelize');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
                msg: "Invalid email. Provide a correct email."
            },
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
    roles: {
        type: DataTypes.STRING,
        defaultValue: "student",
        enum: ["student", "teacher", "manager"]
    },
    photo: {
        type: DataTypes.BLOB,
        allowNull: true
    }
});

const CourseUser = sequelize.define('CourseUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    is_actived: {
        type: DataTypes.STRING
    }
});

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING
    },
    course_description: {
        type: DataTypes.STRING
    }
});

const School = sequelize.define('School', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    school_name: {
        type: DataTypes.STRING
    },
    school_description: {
        type: DataTypes.STRING
    }
});

const SchoolTeacher = sequelize.define('SchoolTeacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING
    },
    middle_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    }
});

const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: DataTypes.STRING
    },
    event_description: {
        type: DataTypes.STRING
    }
});

// References
  User.beforeCreate(async user => {
    try {
      user.password = await bcrypt.hash(user.password, 8);
    } catch (error) {
      throw new Error(error.message, "Something went wrong");
    }
  });

  User.beforeUpdate(async user => {
    try {
      if (user.password) {
        user.password = await bcrypt.hash(user.dataValues.password, 8);
      }
    } catch (error) {
      throw new Error("Could not update the password");
    }
  });

User.hasMany(CourseUser)
CourseUser.belongsTo(User)

Course.hasMany(CourseUser)
CourseUser.belongsTo(Course)

School.hasMany(Course)
Course.belongsTo(School)

School.hasMany(Event)
Event.belongsTo(School)

School.hasMany(SchoolTeacher)
SchoolTeacher.belongsTo(School)

module.exports = {
    User,
    Course,
    CourseUser,
    Event,
    School,
    SchoolTeacher
}
