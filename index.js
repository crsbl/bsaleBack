const { createServer } = require("http");

  
const httpServer = createServer((req, res) => {
  const peticiones = require("./peticiones/index.js");
  //filtro GET o POST
  switch (req.method) {
    case "GET":
      //Esta funcion acumula las funciones get
      peticiones.peticionesGet(req, res);
      break;
    case "POST":
       //Esta funcion acumula las funciones post
      peticiones.peticionesPost(req, res);
      break;
    case "OPTIONS":
      res.write(200);
      res.end();
      break;
    default:
      break;
  }
});

httpServer.listen(process.env.PORT || 3001, () => {
  console.log(".......");
});
