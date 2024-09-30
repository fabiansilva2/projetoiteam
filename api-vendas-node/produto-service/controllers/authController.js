const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário existe
    const user = await Usuario.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    // Verifica a senha
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Senha inválida' });

    // Gera o token
    const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
};
