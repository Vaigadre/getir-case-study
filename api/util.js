const { func } = require("@hapi/joi");
/** Send response object in case of error */
module.exports.sendFailureResponse = function (code, errorTxt) {
  return { code: code, msg: "failure", reason: errorTxt };
};

/** Send response object in case of success */
module.exports.sendSuccessResponse = function (data) {
  return { code: 0, msg: "Success", records: data };
};
