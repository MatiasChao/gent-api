const sql = require("../dbConfig.js")

// constructor
const Word = function(word) {
  this.name = word.name;
  this.translate = word.translate;
}

Word.create = (newCustomer, result) => {
  sql.query("INSERT INTO word SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  })
}

Word.getAll = result => {
    sql.query("SELECT * FROM word", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("words: ", res);
      result(null, res);
    })
}
  
module.exports = Word