module.exports = function(sequelize, DataTypes){
  return sequelize.define("market", {
    api_id: DataTypes.INTEGER,
    name: DataTypes.STRING,

    // Contact Information
    email: DataTypes.STRING,
    facebookUrl: DataTypes.STRING,
    phone: DataTypes.STRING,
    twitterUrl: DataTypes.STRING,
    // websiteName: DataTypes.STRING,
    websiteUrl: DataTypes.STRING,

    // Detailed Information
    photoUrl: DataTypes.STRING,
    products: DataTypes.TEXT,
    vendorsNumber: DataTypes.INTEGER,

    // Location Information
    addressCity: DataTypes.STRING,
    addressState: DataTypes.STRING,
    addressStreet: DataTypes.STRING,
    addressZip: DataTypes.STRING,
    googleLink: DataTypes.STRING,

    // Market Hours
    dayOpen: DataTypes.STRING,
    monthsOpen: DataTypes.ARRAY(DataTypes.STRING),
    timeOpen: DataTypes.STRING,
    timeClose: DataTypes.STRING // Add "," later.

    // Payment Options
    // paymentCard: DataTypes.STRING,
    // paymentCash: DataTypes.STRING,
    // paymentSnap: DataTypes.STRING
  });
}
