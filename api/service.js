const Record = require("./model");

/**
Returning records having 
- createdAt between startDate and endDate
- sum of counts in array between minCount and maxCount
*/

module.exports.getRecords = async function (reqBody) {
  const filter = {
    createdAt: {
      $gte: new Date(reqBody.startDate),
      $lte: new Date(reqBody.endDate)
    },
    totalCount: {
      $gte: reqBody.minCount,
      $lte: reqBody.maxCount
    }
  };
  const selectFields = {
    _id: 0,
    key: 1,
    createdAt: 1,
    totalCount: { $sum: "$counts" }
  };
  try {
    const records = await Record.aggregate([
      {
        $project: selectFields
      },
      { $match: filter }
    ]);
    return { status: "success", records };
  } catch (err) {
    return { status: "failure", msg: err };
  }
};
