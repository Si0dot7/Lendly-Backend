const users = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await users.findOne({ email });
    if (user) {
      return res.send("user already exit");
    }

    salt = await bcrypt.genSalt(10);
    user = new users({
      email,
      password,
    });
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.send("register successfully");
  } catch (error) {
    console.log("register error :" + error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await users.findOneAndUpdate({ email }, { new: true });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.send("password invalid");
      }

      var payload = {
        user: {
          email: user.email,
        },
      };

      jwt.sign(payload, "jwtsecret", { expiresIn: "1d" }, (error, token) => {
        if (error) throw error;
        res.json({ token, payload });
      });
    } else {
      res.send("user not found");
    }
  } catch (error) {
    console.log("login error :" + error);
  }
};

exports.currentUser = async (req, res) => {
  try {
    console.log(req.user);
    const user = await users.findOne({email:req.user.email}).select('-password').exec()
    res.send(user)
  } catch (error) {
    console.log(error);
    res.send("currentUser Error: " + error);
  }
};
