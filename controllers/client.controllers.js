const client = require("../models/Client.js");
const clientDao = require("../dao/clients.dao.js");
const connection = require("../database.js");

exports.getAll = (req, res, next) => {
  clientDao
    .getALL()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      return res.status(500).json({
        error: `Probleme de recuperation de donees : ${err}`,
      });
    });
};

exports.getOneById = (req, res, next) => {
  const id = parseInt(req.params.id);
  clientDao
    .getOneById(id)
    .then((result) => res.status(200).json(result[0]))
    .catch((err) => {
      if (!err) {
        return res.status(404).json({
          error: `Aucune personne avec l'identifiant ${id}`,
        });
      }
      return res.status(500).json({
        error: `Probleme de recuperation de donnees : ${err}`,
      });
    });
};

exports.add = (req, res, next) => {
  const p = new client.client(req.body.nom, req.body.num, req.body.adresse);
  clientDao
    .add(p)
    .then((result) => {
      p.id = result.insertId;
      return res.status(201).json(p);
    })
    .catch((err) => {
      return res.status(500).json({
        error: `Probleme d'insertion : ${err}`,
      });
    });
};

exports.edit = (req, res, next) => {
  const id = parseInt(req.params.id);
  const p = new client.client(req.body.nom, req.body.num, req.body.adresse);

  clientDao
    .edit(id, p)
    .then((result) => {
      return res.status(200).json({
        message: `Personne avec l'identifiant ${id} Modifiee avec succes`,
      });
    })
    .catch((err) => {
      if (!err) {
        return res.status(404).json({
          error: `Aucune client avec l'identifient ${id}`,
        });
      }
      return res.status(500).json({
        error: `Probleme de mise a jour : ${err}`,
      });
    });
};


exports.delete = (req, res, next) => {
  const id = parseInt(req.params.id);
  clientDao.delete(id)
    .then((result) => {
      return res.status(200).json({
        message: `Client avec l'identifiant ${id} a ete supriméé avec succes`,
      });
    })
    .catch((err) => {
      if (!err) {
        return res.status(404).json({
          error: `aucune persone avec ce identifiant ${id}`,
        });
      }
      return res.status(500).json({
        error: `Probleme de suppression : ${err}`,
      });
    });
};
