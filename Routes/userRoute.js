const UserController = require("../Controllers/UserController.js");

const router = require("express").Router();


router.get("/", UserController.signup);
router.post("/signup", UserController.createUser);
router.get("/login", UserController.renderLogin);
router.post("/login-submit", UserController.checkLoginCredentials);
router.get("/dashboard", UserController.renderDashBoard);
router.get("/admin_panel", UserController.renderAdminPanel);
router.get('/get-item-details',UserController.getItemDetails);
router.get('/itemsPage',UserController.renderItemPage);
router.post('/saveItem',UserController.saveItem);
router.post('/saveBill',UserController.saveBill);
router.get('/bill',UserController.renderBill);
 router.get('/get-bill',UserController.getBill);
 router.delete('/delete-bill/:billNo',UserController.deleteBill);
module.exports = router;
