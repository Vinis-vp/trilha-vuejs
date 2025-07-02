<script setup>
import { useAuthStore } from './stores/authStore'
import ListaProdutos from './components/ListaProdutos.vue'

const auth = useAuthStore()

function simularLogin() {
  auth.login('joao@example.com', 'meu-token-super-seguro')
}
</script>

<template>
  <div class="container">
    <h1>Pinia Auth Store</h1>
    <p>Usuário: {{ auth.usuario }}</p>
    <p>Token: {{ auth.token }}</p>

    <button @click="simularLogin">Login Simulado</button>
    <button @click="auth.logout">Logout</button>
  </div>
  <ListaProdutos />
</template>
