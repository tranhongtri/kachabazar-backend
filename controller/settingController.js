//models
const Setting = require("../models/Setting");

//global setting controller
const addGlobalSetting = async (req, res) => {
  try {
    const newGlobalSetting = new Setting(req.body);
    await newGlobalSetting.save();
    res.send({
      message: "Global Setting Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getGlobalSetting = async (req, res) => {
  try {
    const globalSetting = await Setting.findOne({ name: "globalSetting" });
    res.send(globalSetting.setting);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateGlobalSetting = async (req, res) => {
  try {
    const globalSetting = await Setting.updateOne(
      {
        name: "globalSetting",
      },
      {
        $set: {
          "setting.number_of_image_per_product":
            req.body.setting.number_of_image_per_product,
          "setting.shop_name": req.body.setting.shop_name,
          "setting.company_name": req.body.setting.company_name,
          "setting.address": req.body.setting.address,
          "setting.vat_number": req.body.setting.vat_number,
          "setting.post_code": req.body.setting.post_code,
          "setting.contact": req.body.setting.contact,
          "setting.email": req.body.setting.email,
          "setting.website": req.body.setting.website,
          "setting.receipt_size": req.body.setting.receipt_size,
          "setting.default_currency": req.body.setting.default_currency,
          "setting.default_time_zone": req.body.setting.default_time_zone,
          "setting.default_date_format": req.body.setting.default_date_format,
        },
      }
    );

    res.send({
      data: globalSetting,
      message: "Global Setting Update Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addGlobalSetting,
  getGlobalSetting,
  updateGlobalSetting,
};
