module.exports = app => {
    const words = require('../controllers/wordCrl.js')
    const tasks = require('../controllers/taskController.js')


    // WORDS
    // 
    app.post("/words", words.create);
  
    app.get("/words", words.findAll);
  
    // Retrieve a single Customer with customerId
    //app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    //app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer
    //app.delete("/customers", customers.deleteAll);

    // TASKS
    //
    app.get("/tasks", tasks.findAll);
  };