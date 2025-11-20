const express = require("express");
const sequelize = require("./settings/db");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/u", userRoutes);

sequelize.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.log("Error al conectar a la base de datos", err));

module.exports = app;