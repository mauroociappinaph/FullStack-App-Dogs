const { Router } = require("express-router");

const createRouter = Router();

//NOTE - Info por body. Se crea en la BD relacionarlo con todos los temperamentos.
createRouter.post("/", (req, res) => {
  res.status(200).send("Perro creado correctamente");
});
module.exports = createRouter;
