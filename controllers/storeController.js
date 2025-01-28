const storeModel = require("../models/stores");

exports.createStore = async (req, res) => {
  try {
    const { name, location, email } = req.body;
    //check if store exist
    const existingStore = await storeModel.findOne({ where: { email: email } });
    if (existingStore) {
      return res.status(400).json({
        message: "Store already exists",
      });
    }
   
    //create a new store
    const newStore = await storeModel.create({
      name,
      location,
      email
    });
    //send a success response
    res.status(201).json({
      message: "Store created successfully",
      data: newStore
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error" + error.message,
    });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const allStores = await storeModel.findAll();
    res.status(200).json({
      message: "Stores fetched successfully",
      data: allStores,
      total: allStores.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error" + error.message,
    });
  }    
};

exports.getOneStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await storeModel.findByPk(id);
    if (!store) {
      return res.status(404).json({
        message: "Store not found",
      });
    }

    //send a success response
    res.status(200).json({
      message: "store Found",
      data: store,
    });
    }catch (error) {
    res.status(500).json({
      message: "Internal Server Error" + error.message,
    });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, email } = req.body;
    const updatedStore = await storeModel.update(
      { name, location, email },
      { where: { id: id } }
    );
    if (!updatedStore) {
      return res.status(404).json({
        message: "Store not found",
      });
    }
    //send a success response
    res.status(200).json({
      message: "Store updated successfully",
      data: updatedStore,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error" + error.message,
    });
  }
}
  
exports.deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStore = await storeModel.destroy({ where: { id: id } });
    if (!deletedStore) {
      return res.status(404).json({
        message: "Store not found",
      });
    }
    //send a success response
    res.status(200).json({
      message: "Store deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error" + error.message,
    });
  }
};
