<template>
  <div class="container mt-5">
    <h3>Lista de Usuários</h3>
    <ul class="list-group" v-if="usuarios.length">
      <li
        class="list-group-item"
        v-for="usuario in usuarios"
        :key="usuario.id"
      >
        <strong>{{ usuario.nome }}</strong> - {{ usuario.email }}
      </li>
    </ul>
    <p v-else>Nenhum usuário cadastrado.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const usuarios = ref([])

const carregarUsuarios = async () => {
  try {
    const resposta = await axios.get('http://localhost:3000/usuarios')
    usuarios.value = resposta.data
  } catch (erro) {
    console.error('Erro ao carregar usuários:', erro)
  }
}

onMounted(() => {
  carregarUsuarios()
})
</script>
