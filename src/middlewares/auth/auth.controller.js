const db = require("../../app/models");
const { verifyJwtToken } = require("./logics");
const Staff = db.staff;

exports.authorize = async (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    res.status(401).send({ message: "AUTHORIZATION_NOT_FOUND" });
    return;
  }

  let token = authorization.replace("Bearer ", "");
  // console.log(`token: `, token);

  if (!token) {
    res.status(404).send({ message: "TOKEN_NOT_FOUND" });
  } else {
    const extractedToken = verifyJwtToken(token);

    if (extractedToken.error) {
      res
        .status(401)
        .send({ message: "Unauthorized!", error: extractedToken.error });
    } else {
      console.log(`extractedToken: `, extractedToken);

      const user = await Staff.findOne({
        where: { username: extractedToken.username },
      });

      if (!user) {
        res
          .status(401)
          .send({ message: "Unauthorized!", error: extractedToken.error });
      }

      next();
    }
  }
};
