module.exports = async ({ github, context, core }) => {
  try {
    new Promise(function (resolve, reject) {
      throw new Error("Whoops!");
    });
  } catch (error) {
    // if (error instanceof Error) core.setFailed(error);
  }
};
