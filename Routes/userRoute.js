const UserController = require("../Controllers/UserController.js");

const router = require("express").Router();


router.get("/", UserController.signup);
router.post("/signup", UserController.createUser);
router.get("/login", UserController.renderLogin);
router.post("/login-submit", UserController.checkLoginCredentials);
router.get("/admin_panel", UserController.renderAdminPanel);
router.get('/get-item-details',UserController.getItemDetails);
router.post('/saveBill',UserController.saveBill);


module.exports = router;
