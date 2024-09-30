const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/pedidos', authMiddleware, pedidoController.listarPedidos);
router.get('/pedido/:id', pedidoController.obterPedidoPorId);
router.post('/pedido', authMiddleware, pedidoController.adicionarPedido);
router.put('/pedidos/:id', authMiddleware, pedidoController.atualizarPedido);
router.delete('/pedidos/:id', authMiddleware, pedidoController.deletarPedido);

module.exports = router;
