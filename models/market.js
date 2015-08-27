module.exports = function(sequelize, DataTypes){
  return sequelize.define("market", {
    name: DataTypes.STRING,
    api_id: DataTypes.INTEGER,
    addressStreet: DataTypes.STRING,
    addressCity: DataTypes.STRING,
    addressState: DataTypes.STRING,
    addressZip: DataTypes.STRING,
    googleLink: DataTypes.STRING,
    products: DataTypes.TEXT,
    dayOpen: DataTypes.STRING,
    timeOpen: DataTypes.STRING,
    timeClose: DataTypes.STRING,
    monthsOpen: DataTypes.ARRAY(DataTypes.STRING),
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    facebookUrl: DataTypes.STRING,
    twitterUrl: DataTypes.STRING,
    vendorsNumber: DataTypes.INTEGER,
    websiteUrl: DataTypes.STRING
  });
}
