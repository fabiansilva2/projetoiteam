// Classes criadas apenas para facilitar os testes para deletar e criar usuarios rapidamente.
const bcrypt = require('bcryptjs');
const Usuario = require('../cliente-service/models/Usuario');
const sequelize = require('../cliente-service/config/database');

(async () => {
    try {
        // Sincroniza com o banco de dados
        await sequelize.sync();

        // Dados dos usuários
        const usuarios = [
            { username: 'usuario1', password: 'senhaUsuario1' },
            { username: 'usuario2', password: 'senhaUsuario2' }
        ];

        // Cria os usuários
        for (const { username, password } of usuarios) {
            const senhaCriptografada = bcrypt.hashSync(password, 8);
            const user = await Usuario.create({ username, password: senhaCriptografada });
            console.log('Usuário criado com sucesso:', user.username);
        }
    } catch (error) {
        console.error('Erro ao criar usuários:', error);
    } finally {
        // Fecha a conexão com o banco de dados
        await sequelize.close();
    }
})();
