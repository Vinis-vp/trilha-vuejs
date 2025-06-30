<!-- src/components/FormularioUsuario.vue -->
<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const telefone = ref('')

const enviar = () => {
  console.log('Usuário:', {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value
  })
}
</script>

<template>
  <form @submit.prevent="enviar">
    <input v-model="nome" placeholder="Nome" />
    <input v-model="email" placeholder="Email" />
    <input v-model="telefone" placeholder="Telefone" />
    <button type="submit">Cadastrar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}
</style>
