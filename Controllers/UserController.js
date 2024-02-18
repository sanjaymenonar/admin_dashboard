const db = require("../Models");
const User = db.users;
const Item=db.items;
const Sale=db.sales;
const Op = db.Sequelize.Op;
exports.signup = (req, res) => {
  res.render("pages/signup");
};

exports.createUser = async(req, res) => {
  try {
 
    //   check data has already been created
    const checkData = await User.findAll({
    where: {
        [Op.or]: {
            email: req.body.email,
            password: req.body.password,
            },
        },
    });
    console.log("hj",checkData)
if (checkData.length > 0) {
    res.status(500).json({ message: "email/password has already in use" });
} else {
    await User
        .create({
        email: req.body.email,
        password: req.body.password,
        token: req.body.email + req.body.password,
    })
    .then((result) => {
        // res.status(201).json({
        // message: "user successful created",data: {
        // email: req.body.email,
        // password: req.body.password,
        
        //     },
        // });
        res.redirect('/user/login');
    });
}
} catch (error) {
    res.status(404).json({ message: error });
}
}


exports.renderLogin = (req, res) => {
 
  res.render("pages/login");
};

exports.checkLoginCredentials=async(req,res)=>{
  try {
    console.log("dfgf")
    const checkData = await User.findAll({
      where: {
          [Op.and]: {
              email: req.body.email,
              password: req.body.password,
              },
          },
      });
      console.log("fgd",checkData)
  if (checkData.length > 0) {
    //res.redirect('/user/admin_panel');
    res.status(200).json("Success")
  } else {
    res.status(500).json({ message: "email/password Incorrect" });
  }
  } catch (error) {
    res.status(404).json({ message: error });
  }
}

exports.renderAdminPanel = (req, res) => {
 
  res.render("pages/adminPanel");
};
exports.renderDashBoard = async(req, res) => {
    let sales=await Sale.findAll({});
    res.render('layout', {
        sales: sales
    });
};

exports.renderItemPage = (req, res) => {
 
  res.render("pages/items");
};

exports.renderBill = (req, res) => {
 
    res.render("pages/bill");
  };
  

exports.getItemDetails=async(req,res)=>{
  const itemName = req.query.itemName;
   console.log("check",itemName)
    try {
        const itemDetails = await Item.findOne({       where: {
          [Op.or]: {
              itemName: itemName,
              itemName: itemName.toLowerCase(),
              },
          },
 });
        if (itemDetails) {
            res.status(200).json({ success: true, item: itemDetails });
        } else {
            res.status(404).json({ success: false, message: 'Item not found' });
        }
    } catch (error) {
        console.error('Error fetching item details:', error);
        res.json({ success: false, message: 'Error fetching item details' });
    }

}

exports.saveBill=async(req,res)=>{
  try {
 console.log("ne",req.body)
    
    await Sale
        .create(req.body)
    .then(async(result) => {
        res.status(201).json({
        message: "Bill Added",
        });
    
    });

} catch (error) {
    res.status(404).json({ message: error });
}
}




exports.saveItem=async(req,res)=>{
  try {
 
    
    await Item
        .create(req.body)
    .then((result) => {
        res.status(201).json({
        message: "Item Added",
        });
        
    });

} catch (error) {
    res.status(404).json({ message: error });
}
}

exports.getBill=async(req,res)=>{
    const billNo = req.query.billNo;
    
      try {
          const itemDetails = await Sale.findOne({where: {
            [Op.or]: {
                billNo: billNo,
               
                },
            },
   });
          if (itemDetails) {
           
            res.render('pages/bill', {
                billingDetails: itemDetails
            });
          } else {
              res.status(404).json({ success: false, message: 'Bill not found' });
          }
      } catch (error) {
          console.error('Error fetching item details:', error);
          res.json({ success: false, message: 'Error fetching item details' });
      }
  
  }

  exports.deleteBill=async(req,res)=>{
    const { billNo } = req.params;

    try {
        
        await Sale.destroy({
            where: {
                billNo: billNo
            }
        });
        res.json({ message: 'Bill deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete bill.' });
    }
  }