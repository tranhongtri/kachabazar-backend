require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../../models/Product");

// const base = 'https://api-m.sandbox.paypal.com';

let mongo_connection = mongoose.createConnection(process.env.MONGO_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: 1,
  poolSize: 100,
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 30000,
});

// decrease product quantity after a order created
const handleProductQuantity = async (cart) => {
  try {
    await cart.forEach(async (p) => {
      if (p?.variants?.length <= 0) {
        await Product.findOneAndUpdate(
          {
            _id: p._id,
          },
          {
            $inc: {
              stock: -p.quantity,
              sales: p.quantity,
            },
          },
          {
            new: true,
          }
        );
      }
      if (p?.variants?.length > 0) {
        await Product.findOneAndUpdate(
          {
            _id: p._id,
            "variants.productId": p?.variant?.productId || "",
          },
          {
            $inc: {
              stock: -p.quantity,
              "variants.$.quantity": -p.quantity,
              sales: p.quantity,
            },
          },
          {
            new: true,
          }
        );
      }
    });
  } catch (err) {
    console.log("err on handleProductQuantity", err.message);
  }
};

const handleProductAttribute = async (key, value, multi) => {
  try {
    // const products = await Product.find({ 'variants.1': { $exists: true } });
    const products = await Product.find({ isCombination: true });

    // console.log('products', products);

    if (multi) {
      await products.forEach(async (p) => {
        await Product.updateOne(
          { _id: p._id },
          {
            $pull: {
              variants: { [key]: { $in: value } },
            },
          }
        );
      });
    } else {
      await products.forEach(async (p) => {
        // console.log('p', p._id);
        await Product.updateOne(
          { _id: p._id },
          {
            $pull: {
              variants: { [key]: value },
            },
          }
        );
      });
    }
  } catch (err) {
    console.log("err, when delete product variants", err.message);
  }
};

module.exports = {
  handleProductQuantity,
  handleProductAttribute,
};
