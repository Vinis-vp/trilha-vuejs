const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('api', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
})

const conectarBanco = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso!')
  } catch (erro) {
    console.error('Erro ao conectar com o banco de dados:', erro.message)
  }
}

module.exports = { sequelize, conectarBanco }
