// Classes criadas apenas para facilitar os testes para deletar e criar usuarios rapidamente.
const Usuario = require('./models/Usuario');

const deletarUsuarios = async () => {
    try {
        await Usuario.destroy({
            where: {},
            truncate: true
        });
        console.log('Todos os usuários foram deletados com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar usuários:', error);
    }
};

deletarUsuarios();
