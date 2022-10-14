const mysql = require("mysql");
let connection = mysql.createPool({
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

exports.peticionesGet = (req, res) => {
  const peticion = require("./GET/index.js");
  console.log("get....");
  switch (req.url) {
    case "/productosDatos":
      console.log("productosDatos...");
      peticion.productosDatos(res, connection);
      break;

    case "/filtroDatos":
      console.log("filtroDatos...");
      peticion.filtroDatos(res, connection);
      break;

    default:
      break;
  }
};

exports.peticionesPost = (req, res) => {
  const peticion = require("./POST/index.js");
  console.log("post....");
  switch (req.url) {
    case "/buscarProducto":
      console.log("buscarProducto...");
      peticion(req, res, connection);
      break;
    default:
      break;
  }
};
