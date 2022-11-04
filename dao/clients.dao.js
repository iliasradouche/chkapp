const connection = require("../database.js");

exports.getALL = () => {
  return new Promise((resolve, reject) => {
    const req = connection.query("SELECT * FROM client", (err, result) => {
      console.log(req.sql);
      err ? reject(err) : resolve(result);
    });
  });
};

exports.getOneById = (id) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "SELECT * FROM client WHERE id = ?",
      id,
      (err, result) => {
        console.log(req.sql);
        err || result.lentgh == 0 ? reject(err) : resolve(result);
      }
    );
  });
};

exports.add = (p) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "INSERT INTO client SET nom = ?, num = ?, adresse = ?",
      [p.nom, p.num, p.adresse],
      (err, result) => {
        console.log(req.sql);
        err ? reject(err) : resolve(result);
      }
    );
  });
};

exports.edit = (id, p) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "UPDATE client SET ? WHERE id = ?",
      [p, id],
      (err, result) => {
        console.log(req.sql);
        err || result.affectedRows == 0 ? reject(err) : resolve(result);
      }
    );
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    const req = connection.query(
      "DELETE FROM client WHERE id = ?", id,
      (err, result) => {
        console.log(req.sql);
        err || result.affectedRows == 0 ? reject(err) : resolve(result);
      }
    );
  });
};
