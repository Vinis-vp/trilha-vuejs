const express = require('express')
const app = express()
const { conectarBanco, sequelize } = require('./config/database')
const Usuario = require('./models/Usuario')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor rodando corretamente!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  await conectarBanco()

  // sincronizar modelo com o banco de dados
  await sequelize.sync({ alter: true }) // cria ou atualiza tabela "usuarios"
})

app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body
  
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Preencha todos os campos.' })
    }
  
    try {
      const novoUsuario = await Usuario.create({ nome, email, senha })
      res.status(201).json(novoUsuario)
    } catch (erro) {
      console.error('Erro ao criar usuário:', erro)
      res.status(500).json({ erro: 'Erro ao criar usuário.' })
    }
})

  // Rota para listar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
      const usuarios = await Usuario.findAll()
      res.json(usuarios)
    } catch (erro) {
      console.error('Erro ao buscar usuários:', erro)
      res.status(500).json({ erro: 'Erro ao buscar usuários.' })
    }
})
  
// Rota para atualizar dados de um usuário
app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body
  
    try {
      const usuario = await Usuario.findByPk(id)
  
      if (!usuario) {
        return res.status(404).json({ erro: 'Usuário não encontrado.' })
      }
  
      // Atualiza apenas campos fornecidos
      if (nome) usuario.nome = nome
      if (email) usuario.email = email
      if (senha) usuario.senha = senha
  
      await usuario.save()
  
      res.json({ mensagem: 'Usuário atualizado com sucesso.', usuario })
    } catch (erro) {
      console.error('Erro ao atualizar usuário:', erro)
      res.status(500).json({ erro: 'Erro ao atualizar usuário.' })
    }
})

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Segredo JWT (ideal usar variável de ambiente)
const JWT_SECRET = 'secretKey'

app.post('/login', async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha são obrigatórios.' })
  }

  try {
    const usuario = await Usuario.findOne({ where: { email } })

    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' })
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' })
    }

    const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
      expiresIn: '1h',
    })

    res.json({ token })
  } catch (erro) {
    console.error('Erro ao fazer login:', erro)
    res.status(500).json({ erro: 'Erro ao fazer login.' })
  }
})

const autenticar = require('./middlewares/autenticar')

// Rota protegida
app.get('/protegido', autenticar, (req, res) => {
  res.json({
    mensagem: 'Você acessou uma rota protegida!',
    usuario: req.usuario,
  })
})
