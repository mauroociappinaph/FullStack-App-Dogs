const { Router } = require("express");

const getRouter = Router();

//!SECTION

getRouter.get("/", (req, res) => {
  res.status(200).send("Trae todos los perros");
});

getRouter.get("/:idRaza", (req, res) => {
  const { idRaza } = req.params;
  res.status(200).send(`Este perro viene con el id raza: ${idRaza}`);
});

//NOTE - Viene por body
getRouter.get("/name?", (req, res) => {
  res.status(200).send("Este perro viene por el name");
});

getRouter.get("/temperaments", (req, res) => {
  res.status(200).send("Trae todos los temperamentos");
});





//FIXME - GET | /dogs/name? y GET | /temperaments**


module.exports = getRouter;
