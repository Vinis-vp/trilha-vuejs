const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secretKey'

const autenticar = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não fornecido.' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.usuario = payload // agora você pode usar req.usuario.id, etc.
    next()
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido ou expirado.' })
  }
}

module.exports = autenticar
