const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("../models");

const Admin = db.admin;

const login = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    const user = await Admin.findOne({
      where: { userName: userName },
    });

    console.log(user.toJSON());

    if (user) {
      const resultComparePassword = bcrypt.compareSync(password, user.password);
      if (resultComparePassword) {
        
        const tokenExpiresIn = remberMe ? '72h' : '24h';
        const token = jwt.sign({ userId: user.id, userRole: user.roles[0].name }, process.env.SECRET, { expiresIn: tokenExpiresIn });
        return res.status(200).json({ message: "Login succeessfuy", token, roles: user.roles, userId: user.id, userCountry: user.country });
      }else{

        throw new Error("Unable to login this user");
      }

      
    }
  } catch (error) {
    return res.status(401).json({ message: "UnReconized user", error });
  }
};


module.exports = {
  login,
};
