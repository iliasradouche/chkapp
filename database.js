const mysql = require("mysql");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
async function testconnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testconnection()

/* connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("mysql database is connected successfully");
  }
}); */

module.exports = sequelize;
