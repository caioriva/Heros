const mongoose = require('mongoose');

const DB = 'heroidb';
const URL = 'mongodb://localhost:27017/' + DB;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const conectar = () => {
    mongoose.connect(URL, { useNewUrlParser: true })
        .then(() => {
            console.log('Conexão com o banco de dados realizada com sucesso');
        })
        .catch((err) => {
            console.error('Conexão com banco de dados malsucedida', err);
            process.exit();
        })
};

module.exports = {
    conectar
}
