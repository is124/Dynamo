const provider = require("./../Providers/index");

const Create = async (req, res) => {
  try {
    const response = await provider.Create(req.body.url);

    if (response.isSuccess) {
      return res.json({
        isSuccess: 1,
        message: "Successfully Added",
      });
    } else {
      return res.json({
        isSuccess: 0,
        message: "Failed to add",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      isSuccess: 0,
      message: "Error occurred while adding the web address",
    });
  }
};

const Read = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
  }
};

const Update = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
  }
};

const Delete = async (req, res) => {
  try {

  } catch (err) {
    res.send({ location: "Controllers", method: "Delete" });
  }
};

module.exports = { Create, Read, Update, Delete };