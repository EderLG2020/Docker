const express = require("express");

const app = express();
const puerto = 4000;

app.get("/", (req, res) => {
  res.send("hello word");
});

app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en el puerto ${puerto}`);
});
