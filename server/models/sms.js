'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    contactId: DataTypes.INTEGER, 
    receiverId: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    smsStatus: DataTypes.STRING
  }, {});
  Sms.associate = function(models) {
    // associations are defined here
    Sms.belongsTo(models.Contact, {
      foreignKey: 'contactId',
      onDelete: 'CASCADE',
      hooks: true,
    })
  };
  return Sms;
};
