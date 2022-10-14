const { createServer } = require("http");

const httpServer =  createServer((req, res) => {
    const peticiones = require("./peticiones/index.js");
console.log(req.method);

  switch (req.method) {
    case 'GET':
        peticiones.peticionesGet(req, res);
      break;
      case 'POST':
        peticiones.peticionesPost(req, res);
      break;
      case 'OPTIONS':
   res.write(200);
       res.end();
      break;
    default:
      break;
  }

});

httpServer.listen(process.env.PORT || 3001, ()=>{console.log('.......')});