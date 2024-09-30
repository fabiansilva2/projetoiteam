const orchestratorController = require('../controllers/orquestradorController');
const httpMocks = require('node-mocks-http');
const axios = require('axios');

jest.mock('axios'); // Mock do Axios

describe('Orchestrator Controller - adicionarCliente', () => {
  it('Deve adicionar um cliente com sucesso', async () => {
    // Simula a resposta do serviço de clientes
    axios.post.mockResolvedValueOnce({
      data: { id: 1, nome: 'Cliente Teste' }
    });

    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/adicionarCliente',
      body: {
        nome: 'Cliente Teste',
        email: 'teste@cliente.com',
        telefone: '123456789',
        endereco: 'Rua Teste, 123'
      },
      headers: { Authorization: 'Bearer token_teste' }
    });

    const res = httpMocks.createResponse();

    await orchestratorController.adicionarCliente(req, res);

    // Verifica o status e a resposta
    expect(res.statusCode).toBe(200);
    const data = res._getJSONData();
    expect(data.nome).toBe('Cliente Teste');
    expect(data.id).toBe(1);
  });

  it('Deve retornar erro se a criação do cliente falhar', async () => {
    // Simula erro no serviço de clientes
    axios.post.mockRejectedValueOnce(new Error('Erro ao criar cliente'));

    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/adicionarCliente',
      body: {
        nome: 'Cliente Teste',
        email: 'teste@cliente.com',
        telefone: '123456789',
        endereco: 'Rua Teste, 123'
      },
      headers: { Authorization: 'Bearer token_teste' }
    });

    const res = httpMocks.createResponse();

    await orchestratorController.adicionarCliente(req, res);

    // Verifica o status de erro
    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toHaveProperty('error', 'Erro ao criar cliente');
  });
});
