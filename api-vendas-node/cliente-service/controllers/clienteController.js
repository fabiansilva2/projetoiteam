const Cliente = require('../models/Cliente');

exports.listarClientes = async (_req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarCliente = async (req, res) => {
    try {
        const { nome, email, telefone, endereco } = req.body;
        if (!nome || !email || !telefone || !endereco) {
            return res.status(400).json({ message: 'Nome, email e telefone são obrigatórios' });
        }
        const novoCliente = await Cliente.create({ nome, email, telefone, endereco });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, telefone, endereco } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        cliente.nome = nome;
        cliente.email = email;
        cliente.telefone = telefone;
        cliente.endereco = endereco;
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            console.log(`Cliente com ID ${id} não encontrado`);
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.destroy();
        console.log(`Cliente com ID ${id} deletado com sucesso`);
        return res.status(200).json({ message: 'Cliente Deletado com Sucesso' });
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
        return res.status(500).json({ error: error.message });
    }
};
