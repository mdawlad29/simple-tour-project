const Tour = require("../models/toursModel");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "Success",
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: { tour },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed!",
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "Create successful",
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      status: "Create failed",
      message: "Invalid data sent!",
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "Tour Updated successful!",
      data: {
        tour: updateTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Updated fail!",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Delete Successful!",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "Updated fail!",
      message: error,
    });
  }
};
