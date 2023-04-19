const express = require("express");
const router = express.Router();
const {
  loginCustomer,
  registerCustomer,
  signUpWithProvider,
  verifyEmailAddress,
  forgetPassword,
  changePassword,
  resetPassword,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  addAllCustomers,
} = require("../controller/customerController");
const {
  passwordVerificationLimit,
  emailVerificationLimit,
} = require("../lib/email-sender/sender");

//verify email
router.post("/verify-email", emailVerificationLimit, verifyEmailAddress);

//register a user
router.post("/register/:token", registerCustomer);

//login a user
router.post("/login", loginCustomer);

//register or login with google and fb
router.post("/signup/:token", signUpWithProvider);

//forget-password
router.put("/forget-password", passwordVerificationLimit, forgetPassword);

//reset-password
router.put("/reset-password", resetPassword);

//change password
router.post("/change-password", changePassword);

//add all users
router.post("/add/all", addAllCustomers);

//get all user
router.get("/", getAllCustomers);

//get a user
router.get("/:id", getCustomerById);

//update a user
router.put("/:id", updateCustomer);

//delete a user
router.delete("/:id", deleteCustomer);

module.exports = router;
