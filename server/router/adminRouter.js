const express = require("express");
const adminController = require("../controllers/admincontroller");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();
router.route("/users").get(authMiddleware, adminMiddleware , adminController.getAllUsers);

router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
module.exports = router;
