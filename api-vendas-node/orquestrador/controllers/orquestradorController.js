const axios = require('axios');

exports.login = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/api/auth/login', {
            username: req.body.username,
            password: req.body.password
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listarClientes = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/api/clientes', {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterClientePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`http://localhost:3002/api/cliente/${id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarCliente = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3002/api/cliente', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.put(`http://localhost:3002/api/cliente/${id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.delete(`http://localhost:3002/api/cliente/${id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        
        console.log(`Resposta recebida: ${response.status} - ${JSON.stringify(response.data)}`);
        return res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            // Erros retornados pelo serviço de cliente
            console.error(`Erro do serviço de cliente: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
            return res.status(error.response.status).json(error.response.data);
        } else {
            // Outros erros
            console.error('Erro ao deletar cliente:', error);
            return res.status(500).json({ error: error.message });
        }
    }
};

exports.listarPedidos = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3003/api/pedidos', {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterPedidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`http://localhost:3003/api/pedido/${id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarPedido = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3003/api/pedido', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarPedido = async (req, res) => {
    try {
        const response = await axios.put(`http://localhost:3003/api/pedido/${req.params.id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarPedido = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:3003/api/pedido/${req.params.id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.listarProdutos = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3004/api/produtos', {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obterProdutoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`http://localhost:3004/api/produto/${id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.adicionarProduto = async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3004/api/produto', req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.atualizarProduto = async (req, res) => {
    try {
        const response = await axios.put(`http://localhost:3004/api/produto/${req.params.id}`, req.body, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deletarProduto = async (req, res) => {
    try {
        const response = await axios.delete(`http://localhost:3004/api/produto/${req.params.id}`, {
            headers: { Authorization: req.header('Authorization') }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
