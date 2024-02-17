module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
      billNo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      eWayBillNumber: {
        type: Sequelize.STRING,
      },
      deliveryDate: {
        type: Sequelize.DATEONLY,
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
      },
      deliveryAddress: {
        type: Sequelize.TEXT,
      },
      transactionMode: {
        type: Sequelize.STRING,
      },
      isIGST: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      vehicleNumber: {
        type: Sequelize.STRING,
      },
      deliveryCharge: {
        type: Sequelize.DECIMAL(10, 2),
      },
      totalTaxableAmount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      outstandingAmount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      discount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      gstAmount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      roundOff: {
        type: Sequelize.DECIMAL(10, 2),
      },
      grandTotal: {
        type: Sequelize.DECIMAL(10, 2),
      },
     
      itemsPurchased: {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    });
  
    return Sale;
  };
  