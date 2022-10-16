const mysql = require("mysql");

const conexionMysql = () => {
    let conexion = mysql.createPool({
        host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
        user: "bsale_test",
        password: "bsale_test",
        database: "bsale_test",
    });
  
    return conexion;
  };
  
  module.exports = conexionMysql;