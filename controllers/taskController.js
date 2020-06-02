const Task = require('../models/Task.js')


exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      })
    }
  
    const task = new Task({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status
    })
  
    // Save Customer in the database
    Task.create(task, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        })
      else res.send(data)
    })
  }
  
  exports.findAll = (req, res) => {
      Task.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
    };
  
  // Find a single Customer with a customerId
  exports.findOne = (req, res) => {
    
  };
  
  // Update a Customer identified by the customerId in the request
  exports.update = (req, res) => {
    
  };
  
  // Delete a Customer with the specified customerId in the request
  exports.delete = (req, res) => {
    
  };
  
  // Delete all Customers from the database.
  exports.deleteAll = (req, res) => {
    
  };