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
        isEmail: true,    
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
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
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
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
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
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
    }, 
    img: {
        type: DataTypes.STRING,
        allowNull: true
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
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const News = sequelize.define('News', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pretext: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    title:{
        type: DataTypes.STRING,
        allowNull: true
    }, 
    summary:{
        type: DataTypes.STRING,
        allowNull: true
    }, 
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const EventUser = sequelize.define('EventUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    is_actived: {
        type: DataTypes.STRING
    }
});

const Biblio = sequelize.define('Biblio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING
    }, 
    file: {
        type: DataTypes.STRING
    }
});

// Reference
User.hasMany(CourseUser)
CourseUser.belongsTo(User)

User.hasMany(EventUser)
EventUser.belongsTo(User)

Course.hasMany(CourseUser)
CourseUser.belongsTo(Course)

School.hasMany(Course)
Course.belongsTo(School)

School.hasMany(Event)
Event.belongsTo(School)

Event.hasMany(EventUser)
EventUser.belongsTo(Event)

School.hasMany(SchoolTeacher)
SchoolTeacher.belongsTo(School)

School.hasMany(Biblio)
Biblio.belongsTo(School)

module.exports = {
    User,
    Course,
    CourseUser,
    Biblio,
    Event,
    News,
    EventUser, 
    School,
    SchoolTeacher
}
