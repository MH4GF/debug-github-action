module.exports = async ({ github, context, core }) => {
  new Promise(function (resolve, reject) {
    throw new Error("Whoops!");
  }).catch((e) => {
    throw e;
  });
};
