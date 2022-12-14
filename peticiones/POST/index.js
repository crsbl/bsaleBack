const buscarProducto = (req, res, connectionr) => {
  connectionr.getConnection(function (err, connection) {
    if (err) throw err;

    //suma de datos recolectados enviados por POST
    let datos = "";
    req.on("data", (chunk) => {
      datos += chunk;
    });

    //datos recolectados
    req.on("end", () => {
      datosBuscar = JSON.parse(datos);
      resultadoQuery = null;

      if (datosBuscar.filtro == "Todo") {
        resultadoQuery = "";
      } else {
        resultadoQuery = `and product.category like '${datosBuscar.filtro}' `;
      }

      connection.query(
        `SELECT * FROM product  WHERE product.name like '%${datosBuscar.textobuscar}%' ${resultadoQuery}`,
        function (error, results, fields) {
          let datafilter = JSON.parse(JSON.stringify(results));

          let filtroCategorias = datafilter.filter(
            (filtroCategorias) =>
              filtroCategorias.category === datosBuscar.filtro
          );
          let pagina = datosBuscar.pagina * 8;
          let resultadoFiltrado = null;
          switch (datosBuscar.OrdenarPor) {
            case 0:
              resultadoFiltrado = results
                .sort((a, b) => {
                  if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
                })
                .slice(pagina, pagina + 8);
              break;

            case 1:
              resultadoFiltrado = results
                .sort((a, b) => {
                  if (a.price > b.price) {
                    return 1;
                  }
                  if (a.price < b.price) {
                    return -1;
                  }
                  return 0;
                })
                .slice(pagina, pagina + 8);
              break;
            case 2:
              resultadoFiltrado = results
                .sort((a, b) => {
                  if (a.price < b.price) {
                    return 1;
                  }
                  if (a.price > b.price) {
                    return -1;
                  }
                  return 0;
                })
                .slice(pagina, pagina + 8);
              break;
            default:
              break;
          }
          res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers":
              "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
            "Content-Type": "application/json",
          });
          res.write(JSON.stringify([resultadoFiltrado, results.length]));
          res.end();
          connection.release();
        }
      );
    });
  });
};

module.exports = buscarProducto;
