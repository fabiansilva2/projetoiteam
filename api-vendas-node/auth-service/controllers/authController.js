/* const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Validando se os campos estão preenchidos
    if (!username || !password) {
        return res.status(400).json({ message: 'Username e password são obrigatórios' });
    }

    try {
        // Buscando o usuário no banco de dados
        const usuario = await Usuario.findOne({ where: { username } });

        // Verificando se o usuário existe
        if (!usuario) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // Comparando a senha fornecida com a senha armazenada
        const isMatch = bcrypt.compareSync(password, usuario.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // Gerando o token JWT
        const token = jwt.sign(
            { id: usuario.id, username: usuario.username },
            process.env.JWT_SECRET || 'secret_key', // Utilize uma variável de ambiente para a chave secreta
            { expiresIn: '2h' }
        );

        // Respondendo com o token
        res.status(200).json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error); // Log do erro
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}; */


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { username } });
        if (!usuario) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = bcrypt.compareSync(password, usuario.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: usuario.id, username: usuario.username }, 'secret_key', { expiresIn: '2h' });
        res.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: error.message });
    }
};
