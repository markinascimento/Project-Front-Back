const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository');

//-> Toda a regra de negocio
class UserController {
  //-> Obter UM registro
  async auth(request, response) {
    const { senha, email } = request.body;

    const userExists = await UserRepository.authenticate(senha, email);

    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    const user = {
      senha,
      email,
    };

    response.json({
      user,
      token: jwt.sign(user, 'PRIVATEKEY'),
    });
  }

  //-> Listar todos os registros
  async index(request, response) {
    const users = await UserRepository.findAll();

    response.json(users);
  }

  //-> Obter UM registro
  async show(request, response) {
    const { id } = request.params;

    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
  }

  //-> Criar um novo registro
  async store(request, response) {
    const { nome, senha, email, telefone } = request.body;

    if (!nome) {
      return response.status(400).json({ erro: 'Name is required' });
    }

    const userExists = await UserRepository.findByEmail(email);

    if (userExists) {
      return response.status(400).json({ erro: 'User already exists' });
    }

    const user = await UserRepository.create({
      nome,
      senha,
      email,
      telefone,
    });

    response.json(user);
  }

  //-> Editar um novo registro
  async update(request, response) {
    const { id } = request.params;
    const { nome, senha, email, telefone } = request.body;

    const userExists = await UserRepository.findById(id);

    if (!userExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!nome) {
      return response.status(400).json({ errro: 'Name is required' });
    }

    const userByEmail = await UserRepository.findByEmail(email);

    if (userByEmail && userByEmail.id !== id) {
      return response.status(400).json({ erro: 'This email not user' });
    }

    const newUser = await UserRepository.update(id, {
      nome, senha, email, telefone,
    });

    response.json(newUser);
  }

  //-> Deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User does not exist!' });
    }

    await UserRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new UserController();
