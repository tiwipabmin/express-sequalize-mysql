function getEnvOrError(env) {
  const result = process.env[env];

  if (!result) {
    throw {
      code: "ENV_NOT_FOUND",
      message: `${env} environment not found.`,
      env,
    };
  }

  return result;
}

module.exports = {
  getEnvOrError,
};
