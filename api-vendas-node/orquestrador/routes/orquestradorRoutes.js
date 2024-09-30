const express = require('express');
const router = express.Router();
const orquestradorController = require('../controllers/orquestradorController');

router.post('/login', orquestradorController.login);
router.get('/clientes', orquestradorController.listarClientes);
router.get('/cliente/:id', orquestradorController.obterClientePorId);
router.post('/cliente', orquestradorController.adicionarCliente);
router.put('/cliente/:id', orquestradorController.atualizarCliente);
router.delete('/cliente/:id', orquestradorController.deletarCliente);
router.get('/pedidos', orquestradorController.listarPedidos);
router.get('/pedido/:id', orquestradorController.obterPedidoPorId);
router.post('/pedido', orquestradorController.adicionarPedido);
router.put('/pedido/:id', orquestradorController.atualizarPedido);
router.delete('/pedido/:id', orquestradorController.deletarPedido);
router.get('/produtos', orquestradorController.listarProdutos);
router.get('/produto/:id', orquestradorController.obterProdutoPorId);
router.post('/produto', orquestradorController.adicionarProduto);
router.put('/produto/:id', orquestradorController.atualizarProduto);
router.delete('/produto/:id', orquestradorController.deletarProduto);

module.exports = router;
