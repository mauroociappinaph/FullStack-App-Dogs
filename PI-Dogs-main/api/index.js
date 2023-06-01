
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('El servidor esta escuchando en el puerto 3001'); // eslint-disable-line no-console
  });
});
