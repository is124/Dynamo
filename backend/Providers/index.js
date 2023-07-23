const repo = require("./../Repo/index");
const Utils = require("./../Utils/index");

const Create = async (webaddress) => {
  try {
    
    const data = {
      NAME: Utils.getWebsiteName(webaddress),
      URL: webaddress
    }

    const response = await repo.Create(data);

    return response;

  } catch (err) {
    console.error("Error in Provider: ", err);
    return {
      isSuccess: 0,
      message: err.message,
    };
  }
};


const Read = async () => {
  try {
    const allData = repo.Read();

    if (!allData) {
      return {
        isSuccess: 0,
        data: [],
      };
    }

    return {
      isSuccess: 1,
      data: allData,
    };
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

const Update = async () => {
  try {
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

const Delete = async () => {
  try {
  } catch (err) {
    return {
      isSuccess: 0,
      message: err,
    };
  }
};

module.exports = { Create, Read, Update, Delete };