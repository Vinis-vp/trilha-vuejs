<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const usuarios = ref([])
const nome = ref('')

const carregar = async () => {
  const res = await axios.get('http://localhost:3000/usuarios')
  usuarios.value = res.data
}

const adicionar = async () => {
  if (!nome.value) return
  await axios.post('http://localhost:3000/usuarios', { nome: nome.value })
  nome.value = ''
  carregar()
}

const remover = async (id) => {
  await axios.delete(`http://localhost:3000/usuarios/${id}`)
  carregar()
}

onMounted(carregar)
</script>

<template>
  <input v-model="nome" placeholder="Nome" />
  <button @click="adicionar">Adicionar</button>
  <table>
    <tr><th>ID</th><th>Nome</th><th>Ações</th></tr>
    <tr v-for="u in usuarios" :key="u.id">
      <td>{{ u.id }}</td><td>{{ u.nome }}</td>
      <td><button @click="remover(u.id)">Remover</button></td>
    </tr>
  </table>
</template>
