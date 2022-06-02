module.exports = async ({ github, context, core }) => {
  core.setFailed("test error message")
};
