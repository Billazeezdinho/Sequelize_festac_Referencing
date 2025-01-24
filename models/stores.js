const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../DATABASE/sequelize'); 
const Product = require('./product');


  class Store extends Model {}
  Store.init({
    //model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    location: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Store',
    tableName: 'stores',
    timestamps: true
  });

  Store.hasMany(Product, {
    foreignKey: 'storeId',
    onDelete: 'CASCADE',
    onDelete: 'CASCADE'
  });

  // Product.hasOne(Store, {
  //   foreignKey: 'id',
  //   onDelete: 'CASCADE',
  //   onDelete: 'CASCADE'
  // }
  // )

  module.exports = Store;