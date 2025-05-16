/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'default-student.jpg',
      validate: {
        isUrl: true,
      },
    },

    gpa: {
      type: Sequelize.FLOAT,
      allowNull: true,
      validate: {
        min: 0.0,
        max: 4.0,         
      },
    }
});

// Export the student model
module.exports = Student;