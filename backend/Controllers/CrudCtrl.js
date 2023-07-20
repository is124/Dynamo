const Create = async (req, res) => {
    try {
        const newAddress = req.body.url;

        //add newAddress to db and get response from provider
  
        return res.json({
          isSuccess: 1,
          message: "Added new address"
        });

    } catch (err) {
        console.log(err);
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