const httpMocks = require('node-mocks-http');
const clienteController = require('../controllers/clienteController');
const Cliente = require('../models/Cliente'); // Importando o modelo

jest.mock('../models/Cliente'); // Mock do modelo Cliente

describe('Cliente Controller', () => {
    describe('Adicionar Cliente', () => {
        test('Deve retornar status 201 e criar um novo cliente', async () => {
            // Mock da criação de um cliente
            Cliente.create.mockResolvedValue({
                nome: 'Teste Cliente',
                email: 'teste@cliente.com',
                telefone: '123456789',
                endereco: 'Rua Teste'
            });

            const req = httpMocks.createRequest({
                method: 'POST',
                url: '/api/clientes',
                body: {
                    nome: 'Teste Cliente',
                    email: 'teste@cliente.com',
                    telefone: '123456789',
                    endereco: 'Rua Teste'
                }
            });
            const res = httpMocks.createResponse();

            await clienteController.adicionarCliente(req, res);

            expect(res.statusCode).toBe(201); // Espera um status 201
            const jsonResponse = res._getJSONData();
            expect(jsonResponse).toBeTruthy(); // Verifica se existe um corpo de resposta
            expect(jsonResponse.nome).toBe('Teste Cliente'); // Verifica se o nome do cliente está correto
        });
    });
});


/*const httpMocks = require('node-mocks-http');
const clienteController = require('../controllers/clienteController');

describe('Cliente Controller', () => {
    describe('Adicionar Cliente', () => {
        test('Deve retornar status 201 e criar um novo cliente', async () => {
            const req = httpMocks.createRequest({
                method: 'POST',
                url: '/api/clientes',
                body: {
                    nome: 'Teste Cliente',
                    email: 'teste@cliente.com',
                    telefone: '1234567890',
                    endereco: 'Endereço do Cliente'
                },
            });
            const res = httpMocks.createResponse();

            await clienteController.adicionarCliente(req, res);

            expect(res.statusCode).toBe(201);
            const jsonResponse = res._getJSONData();
            expect(jsonResponse).toBeTruthy(); // Verifica se existe um corpo de resposta
            expect(jsonResponse.nome).toBe('Teste Cliente'); // Verifica se o nome do cliente está correto
        });
    });
});*/