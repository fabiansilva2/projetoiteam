const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

//Listar produtos
router.get('/produtos', authMiddleware, produtoController.listarProdutos);

router.get('/produto/:id', produtoController.obterProdutoPorId);

// Rota para adicionar produto
router.post('/produto', authMiddleware, produtoController.adicionarProduto);

// Rota para atualizar produto
router.put('/produto/:id', authMiddleware, produtoController.atualizarProduto);

// Rota para deletar produto
router.delete('/produto/:id', authMiddleware, produtoController.deletarProduto);

module.exports = router;
