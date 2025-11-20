const { DataTypes } = require("sequelize");
const sequelize = require("../settings/db");

const User = sequelize.define(
    "User",
    {
        nombres: { type: DataTypes.STRING, allowNull: false },
        apellidos: { type: DataTypes.STRING, allowNull: false },
        dni: { type: DataTypes.STRING, allowNull: false, unique: true },
        fecha_nac: { type: DataTypes.DATEONLY, allowNull: false }
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
);

module.exports = User;



