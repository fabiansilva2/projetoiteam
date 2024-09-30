const Pedido = require('../models/Pedido');
const axios = require('axios');

// Listar todos os pedidos
exports.listarPedidos = async (_req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterPedidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ message: 'Pedido não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Adicionar um novo pedido
exports.adicionarPedido = async (req, res) => {
    try {
        const { clienteId, produtoId, quantidade } = req.body;

        // Verificar se o cliente existe
        let clienteResponse;
        try {
            clienteResponse = await axios.get(`http://localhost:3000/api/cliente/${clienteId}`);
        } catch (error) {
            console.error('Erro ao verificar cliente:', error.message);
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        if (!clienteResponse.data) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        // Verificar se o produto existe
        let produtoResponse;
        try {
            produtoResponse = await axios.get(`http://localhost:3000/api/produto/${produtoId}`);
        } catch (error) {
            console.error('Erro ao verificar produto:', error.message);
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        if (!produtoResponse.data) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Calcular o total
        const total = quantidade * produtoResponse.data.preco;

        // Criar o pedido
        const novoPedido = await Pedido.create({ clienteId, produtoId, quantidade, total });

        res.status(201).json(novoPedido);
    } catch (error) {
        console.error('Erro ao adicionar pedido:', error.message);
        res.status(500).json({ error: error.message });
    }
};

/* exports.adicionarPedido = async (req, res) => {
    try {
        const { clienteId, produtos, data, status } = req.body;

        // Verificar se o cliente existe
        const clienteResponse = await axios.get(`http://localhost:3000/api/clientes/${clienteId}`);
        if (!clienteResponse.data) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        // Verificar se os produtos existem
        for (const produtoId of produtos) {
            const produtoResponse = await axios.get(`http://localhost:3000/api/produtos/${produtoId}`);
            if (!produtoResponse.data) {
                return res.status(404).json({ message: `Produto com ID ${produtoId} não encontrado` });
            }
        }

        const novoPedido = await Pedido.create({ clienteId, data, status });
        // Adicionar lógica para associar produtos ao pedido, se necessário
        res.status(201).json(novoPedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; */

// Atualizar um pedido
exports.atualizarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { clienteId, produtos, data, status } = req.body;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        // Verificar se o cliente existe
        const clienteResponse = await axios.get(`http://localhost:3000/api/clientes/${clienteId}`);
        if (!clienteResponse.data) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        // Verificar se os produtos existem
        for (const produtoId of produtos) {
            const produtoResponse = await axios.get(`http://localhost:3000/api/produtos/${produtoId}`);
            if (!produtoResponse.data) {
                return res.status(404).json({ message: `Produto com ID ${produtoId} não encontrado` });
            }
        }

        pedido.clienteId = clienteId;
        pedido.data = data;
        pedido.status = status;
        await pedido.save();
        // Lógica para associar produtos ao pedido, se necessário
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Deletar um pedido
exports.deletarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        await pedido.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
