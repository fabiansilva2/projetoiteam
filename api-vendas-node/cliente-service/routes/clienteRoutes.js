const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para listar clientes
router.get('/clientes', authMiddleware, clienteController.listarClientes);

// Rotas pesquisar cliente por id
router.get('/cliente/:id', clienteController.obterClientePorId);

// Rota para adicionar cliente
router.post('/cliente', authMiddleware, clienteController.adicionarCliente);

// Rota para atualizar cliente
router.put('/cliente/:id', authMiddleware, clienteController.atualizarCliente);

// Rota para deletar cliente
router.delete('/cliente/:id', authMiddleware, clienteController.deletarCliente);

module.exports = router;
