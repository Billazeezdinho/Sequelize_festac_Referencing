const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../DATABASE/sequelize'); 

  class Product extends Model {}

Product.init({
  id: {
       allowNull: false,
       primaryKey: true,
       type: DataTypes.INTEGER
     },
     productName: {
       type:DataTypes.STRING,
       allowNull:false
     },
     productQuantity: {
       type: DataTypes.INTEGER,
       allowNull:false
     },
     productAmount: {
       type: DataTypes.INTEGER,
       allowNull:false
     },
     storeId:{
      type: DataTypes.UUID,
        allowNull: false,
    //   references: {
    //     model: 'stores',
    //     key: 'id'
    //   },
    //    onUpdate:'CASCADE',
    //   onDelete:'CASCADE'
    }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  timestamps: true
});

module.exports = Product;