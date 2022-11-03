const client = require("../models/Client.js");

const connection = require("../database.js");

exports.getAll = (req, res, next) => {
  const query = connection.query("select * from client", (err, result) => {
    console.log(query.sql);
    return res.status(200).json(result);
  });
};

exports.getOneById = (req, res, next) => {
  const query = connection.query(
    "SELECT * FROM client WHERE id = ?",
    req.params.id,
    (err, result) => {
      console.log(query.sql);
      if (err) {
        return res.status(404).json({
          error: `client avec l'identifiant ${req.params.id} non trouvée`,
        });
      } else {
        return res.status(200).json(result[0]);
      }
    }
  );
};

exports.add = (req, res, next) => {
  const p = new client.client(
    req.body.nom,
    req.body.num,
    req.body.adresse
  );
  const query = connection.query(
    "INSERT INTO client SET ?",
    p,
    (err, result) => {
      console.log(query.sql);
      if (err) {
        console.log("error: ", err);
        return res.status(500).json({
          error: `Probleme d'insertion`,
        });
      } else {
        p.id = result.insertId;
        return res.status(201).json(p);
      }
    }
  );
};

exports.edit = (req, res, next) => {
  const id = parseInt(req.params.id);
  const p = new client.client(
    req.body.nom,
    req.body.num,
    req.body.adresse,
  );
  const query = connection.query("UPDATE client set ? where id = ?", [p, id], (err, result) => {
    console.log(query.sql)
    if(err) {
      console.log("error: ", err);
      return res.status(500).json({
        error: `Probleme de mise ajour`
      });
    }
    else{
      return res.status(200).json({
        message: `Personne avec l'indentifiant ${req.params.id} modifiée avec succée`
      });
    }
  });
};
exports.delete = (req, res, next) => {
  const id = parseInt(req.params.id);
  const query = connection.query("DELETE FROM client WHERE id = ?", id, (err, result) =>{
    console.log(query.sql)
    if(err){
      console.log("error: ", err);
      return res.status(500).json({
        error:`Probleme de suppression`
      });
    }
    else {
      return res.status(200).json({
        message: `Client avec l'identifiant ${ req.params.id} supprimée avec succés`
      });
    }
  });
};
