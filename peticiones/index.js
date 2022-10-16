const conexion = require("../conexion/index");

//peticiones GET
exports.peticionesGet = (req, res) => {
  const peticion = require("./GET/index.js");
  switch (req.url) {
    case "/productosDatos":
      peticion.productosDatos(res, conexion());
      break;

    case "/filtroDatos":
      peticion.filtroDatos(res, conexion());
      break;

    default:
      break;
  }
};

//peticiones POST
exports.peticionesPost = (req, res) => {
  const peticion = require("./POST/index.js");

  switch (req.url) {
    case "/buscarProducto":
      peticion(req, res, conexion());
      break;
    default:
      break;
  }
};
