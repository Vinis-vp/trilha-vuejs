<template>
  <div class="container mt-5" style="max-width: 400px">
    <h3>Login</h3>

    <form @submit.prevent="fazerLogin">
      <div class="mb-3">
        <label class="form-label">E-mail</label>
        <input type="email" class="form-control" v-model="email" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Senha</label>
        <input type="password" class="form-control" v-model="senha" required />
      </div>

      <button class="btn btn-primary w-100">Entrar</button>
    </form>

    <div v-if="erro" class="alert alert-danger mt-3">
      {{ erro }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth'

const email = ref('')
const senha = ref('')
const erro = ref('')

const fazerLogin = async () => {
  try {
    erro.value = ''
    await login(email.value, senha.value)
    alert('Login realizado com sucesso!')
    window.location.href = '/dashboard' // ou navegue usando router
  } catch (err) {
    erro.value = 'Credenciais inválidas.'
  }
}
</script>
