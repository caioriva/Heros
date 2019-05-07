const heroController = require('../controller/hero-controller');

module.exports = (app) => {
    app.post('/heros', heroController.create);

    app.get('/heros', heroController.findAll);

    app.get('/heros/:name', heroController.findByName);

    app.put('/heros', heroController.update);

    app.delete('/heros/:id', heroController.remove);
}
