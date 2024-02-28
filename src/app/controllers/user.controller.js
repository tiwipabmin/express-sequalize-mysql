const db = require("../models");
const {
  createJwtToken,
  createJwtRefreshToken,
} = require("../../middlewares/auth/logics");
const Staff = db.staff;

exports.signIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    //   throw ExternalError({
    //     statusCode: 400,
    //   });
  }

  const user = await Staff.findOne({
    where: { username: username },
  });

  // if (!user) {
  //   throw ExternalError({
  //     statusCode: 404,
  //     code: "USER_NOT_FOUND",
  //   });
  // }

  //   const validPassword = await bcrypt.compare(password, user.password);

  //   if (!validPassword) {
  //       throw ExternalError({
  //         statusCode: 401,
  //         code: "WRONG_PASSWORD",
  //       });
  //   }

  const accessToken = createJwtToken({
    _id: user.staff_id,
    username: user.username,
  });

  const refreshToken = createJwtRefreshToken({
    _id: user.staff_id,
    username: user.username,
  });

  res.send({
    accessToken: accessToken,
    refreshToken,
  });

  // res.json({
  //   accessToken,
  //   refreshToken,
  //   user: {
  //     _id: user._id,
  //     username: user.username,
  //   },
  // });
};
