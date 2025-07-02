import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const login = async (email, senha) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    senha
  })
  const token = response.data.token
  localStorage.setItem('token', token)
  return token
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const isAuthenticated = () => {
  return !!getToken()
}
