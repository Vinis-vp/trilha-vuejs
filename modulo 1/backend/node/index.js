const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' }
]

app.get('/usuarios', (req, res) => {
  res.json(usuarios)
})

app.post('/usuarios', (req, res) => {
  const novo = { id: Date.now(), ...req.body }
  usuarios.push(novo)
  res.status(201).json(novo)
})

app.delete('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id)
  usuarios = usuarios.filter(u => u.id !== id)
  res.status(204).send()
})


app.listen(3000, () => console.log('API rodando na porta 3000'))
