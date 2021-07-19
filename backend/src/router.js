//-> Desestruturando o metodo Router
const { Router } = require('express');
// const jwt = require('jsonwebtoken');

const UserController = require('./app/controller/UserController');

//-> Atribuindo os valores do metodo, para a variavel
const router = Router();

// router.post('/', (request, response) => {
//   const user = {
//     id: '1',
//     nome: 'Marcos Vinicius',
//     senha: 'bWFyY29z',
//     email: 'marcos@test.com',
//     telefone: '123456789',
//   };

//   return response.json({
//     user,
//     token: jwt.sign(user, 'PRIVATEJEY'),
//   });
// });

router.put('/auth', UserController.auth);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.delete('/user/:id', UserController.delete);
router.post('/user', UserController.store);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);

// router.get('/user', UserController.show);
// router.get('/user', UserController.show);

module.exports = router;
