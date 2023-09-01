const Sequilize = require("sequelize")
const sequelize = new Sequilize("projetoweb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})


// Agendamentos.sync({force:true})
module.exports = {
    Sequilize : Sequilize,
    sequelize : sequelize
}