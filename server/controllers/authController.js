const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("../models");

const User = db.user;

const login = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      where: { userName: userName },
    });

    console.log(user.toJSON());

    if (user) {
      const resultComparePassword = bcrypt.compareSync(password, user.password);
      if (resultComparePassword) {
        
        const tokenExpiresIn = remberMe ? '72h' : '24h';
        const token = jwt.sign({ userId: user.id, userRole: 'USER' }, process.env.SECRET, { expiresIn: tokenExpiresIn });
        return res.status(200).json({ message: "Login succeessfuy", token, roles: user.roles, userId: user.id, userCountry: user.country });
      }else{

        throw new Error("Unable to login this user");
      }

      
    }
  } catch (error) {
    return res.status(401).json({ message: "UnReconized user", error });
  }
};

const register = async (req, res) => {
  const name = req.body.name;
  const userName = req.body.userName;
  const email = req.body.email;
  let password = req.body.password;

  const passwordHash = bcrypt.hashSync(password, 5);

  try {

    const result = await db.sequelize.transaction(async (t) => {
      const newUser = await User.create({
        name: name,
        userName: userName,
        email: email,
        password: passwordHash,
      }, { transaction: t });

      return { newUser };
    });

    return res.status(201).json({ message: "New user registerd successfuly", newUser: result.newUser});
  } catch (error) {
    return res.status(500).json({ message: "Failed to create user", error });
  }
};


module.exports = {
  login,
  register,
};
