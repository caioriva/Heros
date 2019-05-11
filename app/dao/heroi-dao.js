const HeroiModel = require('../model/heroi-model');

const criar = (heroi) => {
    const heroiModel = new HeroiModel(heroi);
    return heroiModel.save();
};

const buscarTodos = () => {
    return HeroiModel.find();
};

const buscarPorNome = (nome) => {
    return HeroiModel.findOne({ nome: nome });
};

const atualizar = (heroi) => {
    return HeroiModel.findByIdAndUpdate(heroi.id, heroi, { new: true });
};

const remover = (id) => {
    return HeroiModel.findByIdAndRemove(id);
};

module.exports = {
    criar,
    buscarTodos,
    buscarPorNome,
    atualizar,
    remover
}
