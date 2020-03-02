const path = require('path');
const sqlite = require('sqlite3');

//configurar local de storage para sqlite
let storage;
if (process.env.NODE_ENV === "development") {
    storage = path.resolve(__dirname, "../../storage/controladoria_dev.sqlite")
} else {
    storage = path.resolve(__dirname, "../../storage/controladoria_production.sqlite");
}

module.exports = {

    dialectModule: sqlite,
    dialect: process.env.DB_DIALECT || 'sqlite',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    //configurações caso seja bd sqlite
    //utiliza como padrão a raiz do projeto, por isso não precisa voltar pastas
    storage: storage,

    //desabilitar warning
    //operatorsAliases: false,
    //desabilitar logs
    loggin: true,
    define: {
        //desativar o nome das tabelas criadas no plural
        freezeTableName: true,

        //faz com que toda tabela possua os campos created_at e updated_at
        timestamps: true,
        // faz com que as tabelas estejam no formato undeline, exemplo a tabela UserGroups se torna user_group
        underscored: true,
        // faz com que a regra como a de cima seja feita, também, nos campos da tabela
        underscoredAll: true

    }
}