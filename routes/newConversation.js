const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {

  });

  router.post("/", (req, res) => {
    console.log("Hellllllooooooooo")

  });
  return router;
};
