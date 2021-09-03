const { Router } = require("express");
const { getRecords } = require("./service");
const { recordsReqObjSchema, validateData } = require("./validator");
const { sendFailureResponse, sendSuccessResponse } = require("./util");
const router = Router({ mergeParams: true });

router.post("/records", async (req, res) => {
  const reqBody = req.body;
  // validate request body object types
  const result = await validateData(reqBody, recordsReqObjSchema);

  if (result.error) {
    return res.status(400).send(sendFailureResponse(400, result.error.message));
  }

  // fetch records
  const data = await getRecords(reqBody);

  if (data.status === "failure") {
    return res.status(500).send(sendFailureResponse(500, data.msg));
  }
  res.send(sendSuccessResponse(data.records));
});

module.exports = router;
