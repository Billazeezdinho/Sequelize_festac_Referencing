const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../DATABASE/sequelize'); 
const Product = require('./product');
const {v4 : UUID } = require('uuid');


  class Store extends Model {}
  Store.init({
    //model attributes are defined here
    id: {
      allowNull: false,
      defaultValue: UUID,
      primaryKey: true,
      type: DataTypes.UUID
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
    tableName: 'Stores',
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