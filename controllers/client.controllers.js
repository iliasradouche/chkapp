const User = require("../models/Client");

var connection = require("../database");

/* Clients = [
  new client.Client(1, "wick", "john"),
  new client.Client(2, "maggio", "carol"),
  new client.Client(3, "dalton", "jack"),
]; */
async function createJane()  {
const jane = await User.create({ name: "Jane" });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.name); // "Jane"
}
exports.getAll = (req, res, next) => {
  createJane()
  const query = connection.query("SELECT * FROM test", (err, result) => {
    console.log(query.sql);
    if (err) {
      return res.status(500).json({
        erreur: err,
      });
    }
    return res.status(200).json(result);
  }); 

};

exports.getOneById = (req, res, next) => {};
exports.add = (req, res, next) => {};
exports.edit = (req, res, next) => {};
exports.delete = (req, res, next) => {};

