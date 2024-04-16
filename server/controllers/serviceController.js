const Service = require("../models/serviceModel");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    console.log(response);
    
    if (!response || response.length === 0) {
      // Handle the case where no document was found
      return res.status(404).json({ msg: "No service found" });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.error(`services: ${error}`);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = services;
