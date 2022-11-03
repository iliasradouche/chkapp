const mysql = require("mysql");

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'test'
})

connection.connect((err) =>{
  if (err) throw err;
  console.log("connexion etablie avec la base de donnee");
});
module.exports = connection;