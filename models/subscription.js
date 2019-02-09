'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    channelID: DataTypes.INTEGER,
    event: DataTypes.STRING,
    status: DataTypes.STRING,
    pair: DataTypes.STRING,
    reqID: DataTypes.INTEGER,
    subscriptionType: DataTypes.STRING,
    subscriptionInterval: DataTypes.INTEGER
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};