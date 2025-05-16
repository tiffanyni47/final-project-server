/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  description: {
    type: Sequelize.TEXT,
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'default-campus.jpg',
    validate: {
      isUrl: true,
    },
  },
});

// Export the campus model
module.exports = Campus;