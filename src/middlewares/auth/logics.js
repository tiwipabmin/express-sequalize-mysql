const jwt = require("jsonwebtoken");
const { getEnvOrError } = require("../../helpers/env");

function createJwtToken(payload) {
  let key;
  try {
    key = JSON.parse(getEnvOrError("ACCESS_TOKEN_SECRET"));
  } catch (error) {
    key = getEnvOrError("ACCESS_TOKEN_SECRET");
  }

  const token = jwt.sign(payload, key, {
    algorithm: "HS256",
    expiresIn: getEnvOrError("ACCESS_TOKEN_EXPIRES_IN"),
  });

  return token;
}

function createJwtRefreshToken(payload) {
  let key;
  try {
    key = JSON.parse(getEnvOrError("REFRESH_TOKEN_SECRET"));
  } catch (error) {
    key = getEnvOrError("REFRESH_TOKEN_SECRET");
  }

  const token = jwt.sign(payload, key, {
    algorithm: "HS256",
    expiresIn: getEnvOrError("REFRESH_TOKEN_EXPIRES_IN"),
  });

  return token;
}

function verifyJwtToken(token) {
  console.log(`verifyJwtToken: token = `, token);
  let key;
  try {
    key = JSON.parse(getEnvOrError("ACCESS_TOKEN_SECRET"));
  } catch (error) {
    key = getEnvOrError("ACCESS_TOKEN_SECRET");
  }
  console.log(`verifyJwtToken: key = `, key);

  try {
    const payload = jwt.verify(token, key, { algorithms: ["HS256"] });

    return payload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return { error: "TOKEN_EXPIRED_ERROR" };

      // throw ExternalError({
      //     statusCode: 401,
      //     code: "TOKEN_EXPIRED_ERROR",
      // });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return { error: "JSON_WEB_TOKEN_ERROR" };

      // throw ExternalError({
      //     statusCode: 400,
      //     code: "JSON_WEB_TOKEN_ERROR",
      // });
    }

    throw error;
  }
}

module.exports = {
  createJwtToken,
  createJwtRefreshToken,
  verifyJwtToken,
};
