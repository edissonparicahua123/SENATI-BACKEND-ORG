const User = require("../models/user");

// CRUD USERS 

module.exports = {
    async listUsers(req, res) {
        const users = await User.findAll();
        res.json(users);
    },
    async createUser(req, res) {
        const { nombres, apellidos, dni, fecha_nac } = req.body;
        const user_new = await User.create({ nombres, apellidos, dni, fecha_nac });
        res.status(201).json(user_new);
    },
    async updateUser(req, res) {
        const { id } = req.params;
        const { nombres, apellidos, dni, fecha_nac } = req.body;
        await User.update({ nombres, apellidos, dni, fecha_nac }, { where: { id } });
        res.json({ message: "User actualizado correctamente" });
    },
    async destroidUser(req, res) {
        const { id } = req.params;
        await User.destroy({ where: { id } });
        res.json({ message: "User eliminado correctamente" });
    },
}