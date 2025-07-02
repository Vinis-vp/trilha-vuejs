<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3>Login</h3>
    <form @submit.prevent="fazerLogin">
      <div class="mb-3">
        <label class="form-label">E-mail</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Senha</label>
        <input v-model="senha" type="password" class="form-control" required />
      </div>
      <button class="btn btn-primary" type="submit">Entrar</button>
      <p class="text-danger mt-2" v-if="erro">{{ erro }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const erro = ref('')
const router = useRouter()

const fazerLogin = async () => {
  try {
    const res = await axios.post('http://localhost:3000/login', {
      email: email.value,
      senha: senha.value,
    })

    localStorage.setItem('token', res.data.token)
    router.push('/protegido')
  } catch (err) {
    erro.value = err.response?.data?.erro || 'Erro ao fazer login.'
  }
}
</script>
