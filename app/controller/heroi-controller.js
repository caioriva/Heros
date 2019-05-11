const heroiDao = require('../dao/heroi-dao');

const criar = (req, res) => {
    const body = req.body;

    if (!(body.nome && body.superpoder.descricao)) {
        return res.status(400).send({
            message: 'Um herói sem nome e/ou sem superpoder não é um herói!'
        });
    }

    const heroi = {
        nome: body.nome,
        superpoder: {
            descricao: body.superpoder.descricao,
            habilidades: body.superpoder.habilidades,
            nivel: body.superpoder.nivel
        }
    }

    heroiDao.criar(heroi)
        .then((heroiCriado) => {
            res.send(heroiCriado);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Não foi possível criar herói: ' + err.message
            });
        });
};

const buscarTodos = (req, res) => {
    heroiDao.buscarTodos()
        .then((herois) => {
            res.send(herois);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Erro ao listar todos os heróis: ' + err.message
            });
        });
};

const buscarPorNome = (req, res) => {
    const params = req.params;

    heroiDao.buscarPorNome(params.nome)
        .then((heroi) => {
            if (!heroi) {
                return res.status(404).send({
                    message: "Não há heróis com o nome: " + params.nome
                });
            }
            res.send(heroi);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erro ao recuperar herói de nome " + params.nome + ": " + err.message
            });
        });
};

const atualizar = (req, res) => {
    const body = req.body;

    if (!(body.nome && body.superpoder.descricao)) {
        return res.status(400).send({
            message: 'Um herói sem nome e/ou sem superpoder não é um herói!'
        });
    }

    const heroi = {
        id: body._id,
        nome: body.nome,
        superpoder: {
            descricao: body.superpoder.descricao,
            habilidades: body.superpoder.habilidades,
            nivel: body.superpoder.nivel
        }
    }

    heroiDao.atualizar(heroi)
        .then((heroiAtualizado) => {
            if (!heroiAtualizado) {
                return res.status(404).send({
                    message: "Não há heróis com o id: " + heroi.id
                });
            }

            res.send(heroiAtualizado);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Erro ao atualizar herói " + heroi.nome + ": " + err.message
            });
        })
};

const remover = (req, res) => {
    const params = req.params;

    heroiDao.remover(params.id)
        .then((heroiRemovido) => {
            if (!heroiRemovido) {
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
    criar,
    buscarTodos,
    buscarPorNome,
    atualizar,
    remover
}