const product = require("../models/product");
const fs = require("fs");

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const readProduct = await product.findOne({ _id: id }).exec();
    res.send(readProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.list = async (req, res) => {
  try {
    const listProduct = await product.find({}).exec();
    res.send(listProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }
    const createProduct = await product(data).save();
    res.send(createProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = await product
      .findOneAndUpdate({ _id: id }, req.body, { new: true })
      .exec();
    res.send(updateProduct);
  } catch (error) {
    console.log(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await product.findOneAndDelete({ _id: id }).exec();
    if (deleteProduct?.file) {
      await fs.unlink("./uploads/" + deleteProduct.file, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("delete successfully");
        }
      });
    }
    res.send(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};
