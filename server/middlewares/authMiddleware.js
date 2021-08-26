const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.userId;
    const userRole = decodedToken.userRole;

    if ((req.headers.userId && req.headers.userId !== userId) && (req.headers.userrole && req.headers.userrole !== 'USER')) {
      // throw 'Invalid user ID';
      res.status(401).json({
        error: new Error('Invalid ID or USER_ROLE: Token Invalid!')
      });

    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};