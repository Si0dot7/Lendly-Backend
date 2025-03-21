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
exports.updateborrow = async (req, res) => {
  try {
    const { email,price,image,title,borrowEmail,status,favorite,favoriteEmail } = req.body;
    const id = req.params.id;
    console.log(req.body);
    
    const readborrow = await product.findOneAndUpdate({ 
      email: email,
      price: price,
      image: image,
      title: title,
    },{borrowEmail:borrowEmail,status:status,favorite:favorite,favoriteEmail:favoriteEmail}, { new: true }).exec();
    res.send(readborrow);
  } catch (error) {
    console.log(error);
  }
};
exports.borrow = async (req, res) => {
  try {
    const { email,price,image,title} = req.query;
    const id = req.params.id;
    const readborrow = await product.findOne({ 
      email: email,
      price: price,
      image: image,
      title: title,
    }).exec();
    res.send(readborrow);
  } catch (error) {
    console.log(error);
  }
};


exports.list = async (req, res) => {
  try {
    const listProduct = await product.find({}).exec();
    console.log(listProduct);
    res.json(listProduct)
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => { 
  try { 
    var data = req.body;
    console.log('Data received:', data); 
    const createProduct = await product.create(data);
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
