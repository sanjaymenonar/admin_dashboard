module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("items", {
      code: {
        type: Sequelize.STRING,
      },
      itemName: {
        type: Sequelize.STRING,
      },
      batchCode: {
        type: Sequelize.STRING,
      },
      unitPrice: {
        type: Sequelize.INTEGER,
      },
      MRP: {
        type: Sequelize.INTEGER,
      },
      tax: {
        type: Sequelize.INTEGER,
      },
      gstPercentage: {
        type: Sequelize.INTEGER,
      },
      gstAmount: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      staff: {
        type: Sequelize.INTEGER,
      }
    });
  
    return User;
  };
  