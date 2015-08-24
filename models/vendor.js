module.exports = function(sequelize, DataTypes){
  return sequelize.definte("vendor", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    mapUrl: DataTypes.STRING,
    product: DataTypes.TEXT,
    paymentCard: DataTypes.BOOLEAN,
    paymentCash: DataTypes.BOOLEAN,
    paymentOther: DataTypes.TEXT,
    paymentSnap: DataTypes.BOOLEAN,
    photoUrl: DataTypes.STRING
  });
}