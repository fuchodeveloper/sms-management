'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {});
  Contact.associate = function(models) {
    // associations are defined here
    Contact.hasMany(models.Sms, {
      foreignKey: 'contactId',
    })
  };
  return Contact;
};
