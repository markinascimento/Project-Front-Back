//-> Importando o EXPRESS
const express = require('express');
const cors = require('cors');
//-> Importando o arquiv Router
const router = require('./router');

//-> Atribuindo os valoreS de EXPRESS para o APP
const app = express();

app.use(cors());
app.use(express.json());
//-> Atribuindo os valoreS de APP para o ROUTER
app.use(router);

//-> Iniciando o servidor na porta indicada, com a mensagem descrita
app.listen(8080, () => console.log('🔥 Server started at http://localhost:8080'));
