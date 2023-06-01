const { Router } = require("express"); // Es un direcionamieto
// Importar todos los routers;
const  getRoutes  = require("../routes/getRouter");
const  createRouter  = require("../routes/createRouter");

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/dogs", getRoutes);
mainRouter.use("/create", createRouter);


module.exports = mainRouter;
