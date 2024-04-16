const express = require('express');
const router = express.Router();

//controller
const authController = require("../controllers/authController")

//validator
const validate = require("../middlewares/validateMiddleware");
const {signupSchema,loginSchema} = require('../validators/authValidator');
const authMiddleware=require("../middlewares/authMiddleware")

//we use controller
router.route("/").get(authController.home) 

router.route("/register").post(validate(signupSchema), authController.register)
router.route("/login").post(validate(loginSchema),authController.login)

//for user data 
router.route("/user").get(authMiddleware, authController.user)



module.exports = router;
