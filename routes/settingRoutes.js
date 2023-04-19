const router = require("express").Router();

const {
  addGlobalSetting,
  getGlobalSetting,
  updateGlobalSetting,
} = require("../controller/settingController");

//add a global setting
router.post("/global/add", addGlobalSetting);

//get global setting
router.get("/global/all", getGlobalSetting);

//update global setting
router.put("/global/update", updateGlobalSetting);

module.exports = router;
