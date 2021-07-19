// const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');

let users = [
  {
    id: v4(),
    nome: 'Marcos Vinicius',
    senha: 'bWFyY29z',
    email: 'marcos@test.com',
    telefone: '123456789',
  },

  {
    id: v4(),
    nome: 'Antonio Santos',
    senha: 'YW50b25pbw==',
    email: 'antonio@test.com',
    telefone: '987654321',
  },

  {
    id: v4(),
    nome: 'Diogo Barbosa',
    senha: 'ZGlvZ28',
    email: 'diogo@test.com',
    telefone: '147852369',
  },
];

//-> Unica tarefa do Repository é 'Acessar a Data Source / Fonte de Dados'
class UserRepository {
  authenticate(senha, email) {
    return new Promise((resolve) => resolve(
      users.find((user) => user.senha === senha && user.email === email),
    ));
  }

  findAll() {
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      users.find((userId) => userId.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      users.find((user) => user.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);
      resolve();
    });
  }

  create({
    nome, senha, email, telefone,
  }) {
    return new Promise((resolve) => {
      const newUser = {
        id: v4(),
        nome,
        senha,
        email,
        telefone,
      };

      users.push(newUser);

      resolve(newUser);
    });
  }

  update(id, {
    nome, senha, email, telefone,
  }) {
    return new Promise((resolve) => {
      const updateUser = {
        id,
        nome,
        senha,
        email,
        telefone,
      };

      users = users.map((use) => (
        use.id === id ? updateUser : use
      ));

      resolve(updateUser);
    });
  }
}

module.exports = new UserRepository();

//const lastUser = users[users.length - 1].id;
