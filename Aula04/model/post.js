const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequilize.STRING
    },
    endereco:{
        type: db.Sequilize.STRING
    },
    bairro:{
        type: db.Sequilize.STRING
    },
    cep:{
        type: db.Sequilize.INTEGER
    }
})


// Agendamentos.sync({force:true})

module.exports = Agendamentos