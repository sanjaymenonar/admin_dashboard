const UserController = require("../Controllers/UserController.js");

const router = require("express").Router();
const multer = require('multer')
const upload = multer()

router.get("/", UserController.signup);
//create user
router.post("/signup", UserController.createUser);
//render loginpage
router.get("/login", UserController.renderLogin);
//login submit
router.post("/login-submit", UserController.checkLoginCredentials);
//render dashboard
router.get("/dashboard", UserController.renderDashBoard);
//render admin panel
router.get("/admin_panel", UserController.renderAdminPanel);
//fetch item details
router.get('/get-item-details',UserController.getItemDetails);
// render item add page
router.get('/itemsPage',UserController.renderItemPage);
//save an item
router.post('/saveItem',upload.none(),UserController.saveItem);
//save bill details
router.post('/saveBill',upload.none(),UserController.saveBill);
//render bill details page
router.get('/bill',UserController.renderBill);
// fetch bill details
 router.get('/get-bill',UserController.getBill);
 // delete a bill
 router.delete('/delete-bill/:billNo',UserController.deleteBill);
module.exports = router;
