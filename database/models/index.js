/*==================================================
/database/models/index.js

It registers models, sets up associations between tables, and generates barrel file for exporting the models.
==================================================*/
const Student  = require('./Student');  // Import Student model
const Campus  = require('./Campus');  // Import Campus model
const { FOREIGNKEYS } = require('sequelize');

Student.belongsTo(Campus,
  {
    foreignKey:{
      name: 'campusId',
      allowNull: true
    },
    onDelete: 'SET NULL'
  });  // Student belongs to only one Campus and allow the campusId to be null

Campus.hasMany(Student);  // Campus can have many Student

// Export models and associations
module.exports = {
  Student,
  Campus
};