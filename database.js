const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas','root','Nayla060217',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;