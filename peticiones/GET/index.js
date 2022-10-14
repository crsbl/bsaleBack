exports.productosDatos = (res, connectionr) => {
  connectionr.getConnection(function (err, connection) {
    if (err) throw err;


    connection.query(
      `SELECT * FROM product  `,
      function (error, results, fields) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        });
        res.write(JSON.stringify([results.slice(0, 8), results.length]));
        res.end();
     
        connection.release();

   
        if (error) throw error;

   
      }
    );
  });
};

exports.filtroDatos = (res, connectionr) => {

    connectionr.getConnection(function (err, connection) {
    if (err) throw err; 

    connection.query(
      "SELECT * FROM category",
      function (error, results, fields) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        });
        console.log(results);
        res.write(JSON.stringify(results));
        res.end();
   
        connection.release();

        if (error) throw error;

      }
    );
  });
};
