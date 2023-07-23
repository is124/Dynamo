const WebAddressStorage = require("./../Models/WebAddressStorage");
const Resource_Usage = require("./../Models/Resource_Usage");
const Response_Time = require("./../Models/Response_Time");
const SSL_Status = require("./../Models/SSL_Status");


const Create = async (webaddress) => {
  try {
    const data = {
      url: webaddress
    }
    const insertRecord = await WebAddressStorage.create(data);
    
    return {
      isSuccess: 1,
    };

  } catch (err) {
    console.error("Error in Repo: ", err);
    throw err;
  }
};

const Read = () => {
  return test.findAll();
};

const Update = () => {};

const Delete = () => {};

module.exports = { Create, Read, Update, Delete };