const joi = require("@hapi/joi");

// request body JOI validator schema
module.exports.recordsReqObjSchema = joi.object({
  startDate: joi.string().required(),
  endDate: joi.string().required(),
  minCount: joi.number().strict(),
  maxCount: joi.number().strict()
});

/** This function validates data schema and return false, if data is valid.  */
module.exports.validateData = async function (data, schema) {
  return schema.validate(data, { abortEarly: false });
};
