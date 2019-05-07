const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const heroRoutes = require('./app/routes/hero-routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

database.connect();
heroRoutes(app);

app.listen(3000, () => {
    console.log('Servidor Node está rodando');
});
