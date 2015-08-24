module.exports = function(sequelize, DataTypes){
  return sequelize.define("vendor", {
    name: DataTypes.STRING,
    addressStreet: DataTypes.STRING,
    addressCity: DataTypes.STRING,
    addressState: DataTypes.STRING,
    addressZip: DataTypes.STRING,
    email: DataTypes.STRING,
    mapUrl: DataTypes.STRING,
    phone: DataTypes.STRING,
    product: DataTypes.TEXT,
    paymentCard: DataTypes.BOOLEAN,
    paymentCash: DataTypes.BOOLEAN,
    paymentOther: DataTypes.TEXT,
    paymentSnap: DataTypes.BOOLEAN,
    photoUrl: DataTypes.STRING,
    facebookUrl: DataTypes.STRING,
    twitterUrl: DataTypes.STRING,
    websiteUrl: DataTypes.STRING
  });
}