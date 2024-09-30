const httpMocks = require('node-mocks-http');
const authController = require('../controllers/authController');
const User = require('../models/Usuario');
const bcrypt = require('bcryptjs');

jest.mock('../models/Usuario'); // Mock do modelo User

describe('Auth Controller', () => {
    describe('Login', () => {
        it('Deve retornar um token ao fazer login corretamente', async () => {
            // Mock de um usuário existente no banco de dados
            const usuarioMock = {
                id: 1,
                username: 'usuario1',
                password: bcrypt.hashSync('senhaUsuario1', 8) // Senha hashada
            };

            // Mock do método findOne
            User.findOne.mockResolvedValueOnce(usuarioMock);

            const req = httpMocks.createRequest({
                method: 'POST',
                url: '/login',
                body: {
                    username: 'usuario1',
                    password: 'senhaUsuario1',
                },
            });

            const res = httpMocks.createResponse();

            // Mockando o bcrypt.compareSync para retornar true
            jest.spyOn(bcrypt, 'compareSync').mockReturnValue(true);

            await authController.login(req, res);

            // Verificando a resposta
            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toHaveProperty('token');
        });
    });
});


/* const httpMocks = require('node-mocks-http');
const authController = require('../controllers/authController'); // Ajuste o caminho conforme necessário
const Usuario = require('../models/Usuario'); // Importando o modelo para usar nos mocks

describe('Auth Controller', () => {
    describe('Login', () => {
        it('Deve retornar um token ao fazer login corretamente', async () => {
            // Mock do usuário que deve existir no banco de dados
            const usuarioMock = { id: 1, username: 'usuario1', password: bcrypt.hashSync('123', 8) };
            jest.spyOn(Usuario, 'findOne').mockResolvedValue(usuarioMock);

            // Criando request e response mocks
            const req = httpMocks.createRequest({
                method: 'POST',
                url: '/api/login',
                body: {
                    username: 'usuario1',
                    password: '123'
                }
            });
            const res = httpMocks.createResponse();

            // Chamando o controller
            await authController.login(req, res);

            // Verificando a resposta
            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toHaveProperty('token');
        });
    });
}); */

/* const httpMocks = require('node-mocks-http');
const authController = require('../controllers/authController');
const User = require('../models/Usuario');

jest.mock('../models/Usuario'); // Mock do modelo User

describe('Auth Controller', () => {
    describe('Login', () => {
        it('Deve retornar um token ao fazer login corretamente', async () => {
            const req = httpMocks.createRequest({
                method: 'POST',
                url: '/login',
                body: {
                  username: 'usuario1',
                  password: 'senhaUsuario1',
                },
            });

            const res = httpMocks.createResponse();

            User.findOne.mockResolvedValueOnce({
                id: 1,
                verifyPassword: jest.fn().mockResolvedValue(true) // Mock da verificação de senha
            });

            await authController.login(req, res);
            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toHaveProperty('token');
        });
    });
});
 */

/* const authController = require('../controllers/authController');
const httpMocks = require('node-mocks-http');
const User = require('../models/Usuario');

jest.mock('../models/Usuario');

describe('Auth Controller - Login', () => {
  it('Deve retornar um token ao fazer login corretamente', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/login',
      body: {
        username: 'usuario1',
        password: 'senhaUsuario1'
      }
    });
    const res = httpMocks.createResponse();

    User.findOne.mockResolvedValue({
      id: 1,
      username: 'usuario1',
      password: 'senha123'
    });

    await authController.login(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toHaveProperty('token');
  });
});*/