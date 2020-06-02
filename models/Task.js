const sql = require("../dbConfig.js")

// constructor
const Task = function(task) {
  this.id = task.id;
  this.name = task.name;
  this.description = task.date;
  this.date = task.date;
  this.status = task.status;
}

Task.create = (newTask, result) => {
  sql.query("INSERT INTO tasks SET ?", newTask, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created task: ", { id: res.insertId, ...newTask });
    result(null, { id: res.insertId, ...newTask });
  })
}

Task.getAll = result => {
    sql.query("SELECT * FROM tasks", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tasks: ", res);
      result(null, res);
    })
}
  
module.exports = Task