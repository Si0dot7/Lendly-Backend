const users = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { name, password } = req.body;

    var user = await users.findOne({ name });
    if (user) {
      return res.send("user already exit");
    }

    salt = await bcrypt.genSalt(10);
    user = new users({
      name,
      password,
    });
    user.password = await bcrypt.hash(password, salt);
    console.log(user.password);

    await user.save();
    res.send("register successfully");
  } catch (error) {
    console.log("register error :" + error);
  }
};

exports.login = async (req, res) => {
  try {
    const {name,password} = req.body

    var user = await users.findOneAndUpdate({name},{new:true})
    if(user){
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.send('password invalid')
        }

        var payload = {
            user:{
                name:user.name
            }
        }

        jwt.sign(payload,'jwtsecret',{expiresIn:'1d'},(error,token)=>{
            if(error) throw error
            res.json({token,payload})
        })
    }
    else{
        res.send('user not found')
    }

  } catch (error) {
    console.log('login error :'+error);
    
  }
};
