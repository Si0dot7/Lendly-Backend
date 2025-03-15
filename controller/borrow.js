const borrow = require('../models/borrow')

exports.list = async (req, res) => {
  try {
    const listItem = await borrow.find({}).exec();
    console.log(listItem);
    res.json(listItem)
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => { 
  try { 
    var data = req.body;
    console.log('Data received:', data); 
    const createItem = await borrow.create(data);
    res.send(createItem);
  } catch (error) {
    console.log(error);
    
  }
};

exports.filter = async (req, res) => {
  try {
    const { email,price,image,title } = req.query;
    const id = req.params.id;
    const readborrow = await borrow.findOne({ 
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