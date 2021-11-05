const express = require("express");
const router = express.Router();

// Base de datos
const connection = require("./database/db");

// Select
router.get("/", (req, res) => {
   let sql = "SELECT * FROM productos";
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.render("index", {
         results: results,
      });
   });
});

// Insert
router.post("/save", (req, res) => {
   let data = {
      producto_nombre: req.body.producto_nombre,
      producto_precio: req.body.producto_precio,
   };
   let sql = "INSERT INTO productos SET ?";
   let query = connection.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect("/");
   });
});

// Update
router.post('/update', (req, res) => {
   let sql = "UPDATE productos SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
   });
});

// Delete
router.post('/delete', (req, res) => {
   let sql = "DELETE FROM productos WHERE producto_id=" + req.body.id;
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
   });
});

module.exports = router;
