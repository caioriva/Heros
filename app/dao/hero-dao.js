const mongoose = require('mongoose');
const HeroModel = require('../model/hero-model');

const create = (hero) => {
    const heroModel = new HeroModel(hero);
    return heroModel.save();
};

const findAll = () => {
    return HeroModel.find();
};

const findByName = (name) => {
    return HeroModel.findOne({ name: name });
};

const update = (hero) => {
    return HeroModel.findByIdAndUpdate(hero.id, hero, { new: true });
};

const remove = (id) => {
    return HeroModel.findByIdAndRemove(id);
};

module.exports = {
    create,
    findAll,
    findByName,
    update,
    remove
}
