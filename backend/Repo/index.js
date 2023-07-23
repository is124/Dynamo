const WebAddressStorage = require("./../Models/WebAddressStorage");
const Resource_Usage = require("./../Models/Resource_Usage");
const Response_Time = require("./../Models/Response_Time");
const SSL_Status = require("./../Models/SSL_Status");


const Create = () => {
  
};

const Read = () => {
  return test.findAll();
};

const Update = () => {};

const Delete = () => {};

module.exports = { Create, Read, Update, Delete };