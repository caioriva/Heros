const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const heroiRoutes = require('./app/routes/heroi-routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/app/views')); 

db.conectar();
heroiRoutes(app);

app.listen(3000, () => {
    console.log('Servidor Node está rodando');
});
