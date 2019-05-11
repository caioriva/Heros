const heroiController = require('../controller/heroi-controller');

module.exports = (app) => {
    app.post('/herois', heroiController.criar);

    app.get('/herois', heroiController.buscarTodos);

    app.get('/herois/:nome', heroiController.buscarPorNome);

    app.put('/herois', heroiController.atualizar);

    app.delete('/herois/:id', heroiController.remover);
}
