const Produto = require('../models/Produto');

exports.listarProdutos = async (_req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarProduto = async (req, res) => {
    try {
        const { nome, preco, estoque } = req.body;
        const novoProduto = await Produto.create({ nome, preco, estoque });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, estoque } = req.body;
        const produto = await Produto.findByPk(id);
        if (produto) {
            produto.nome = nome;
            produto.preco = preco;
            produto.estoque = estoque;
            await produto.save();
            res.json(produto);
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
