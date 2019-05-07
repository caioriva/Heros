const heroDao = require('../dao/hero-dao');

const create = (req, res) => {
    const body = req.body;

    if (!(body.name && body.superpower.description)) {
        return res.status(400).send({
            message: 'Um herói sem nome e/ou sem superpoder não é um herói!'
        });
    }

    const hero = {
        name: body.name,
        age: body.age,
        superpower: {
            description: body.superpower.description,
            abilities: body.superpower.abilities
        }
    }

    heroDao.create(hero)
        .then((createdHero) => {
            res.send(createdHero);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Não foi possível criar herói: ' + err.message
            });
        });
};

const findAll = (req, res) => {
    heroDao.findAll()
        .then((heros) => {
            res.send(heros);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Erro ao listar todos os heróis: ' + err.message
            });
        });
};

const findByName = (req, res) => {
    const params = req.params;

    heroDao.findByName(params.name)
        .then((hero) => {
            if (!hero) {
                return res.status(404).send({
                    message: "Não há heróis com o nome: " + params.name
                });
            }
            res.send(hero);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erro ao recuperar herói de nome " + params.name + ": " + err.message
            });
        });
};

const update = (req, res) => {
    const body = req.body;

    if (!(body.name && body.superpower.description)) {
        return res.status(400).send({
            message: 'Um herói sem nome e/ou sem superpoder não é um herói!'
        });
    }

    const hero = {
        id: body._id,
        name: body.name,
        age: body.age,
        superpower: {
            description: body.superpower.description,
            abilities: body.superpower.abilities
        }
    }

    heroDao.update(hero)
        .then((updatedHero) => {
            if (!updatedHero) {
                return res.status(404).send({
                    message: "Não há heróis com o id: " + hero.id
                });
            }

            res.send(updatedHero);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erro ao atualizar herói " + hero.name + ": " + err.message
            });
        })
};

const remove = (req, res) => {
    const params = req.params;

    heroDao.remove(params.id)
        .then((deletedHero) => {
            if (!deletedHero) {
                return res.status(404).send({
                    message: "Não há heróis com o id: " + params.id
                });
            }
            res.send({ message: "Herói removido corretamente!" });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erro ao remover herói de id " + params.id + ": " + err.message
            });
        });
};

module.exports = {
    create,
    findAll,
    findByName,
    update,
    remove
}