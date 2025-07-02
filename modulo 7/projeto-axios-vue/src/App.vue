<template>
  <div class="container mt-5">
    <h2>Requisição com serviço centralizado (api.js)</h2>
    <button @click="buscarUsuario" class="btn btn-primary">Buscar Usuário</button>
  </div>
  <BuscaCep />
  <ClimaCidade />
  <CrudPosts />
  <router-view />
</template>

<script setup>

import api from './services/api'
import BuscaCep from './components/BuscaCep.vue'
import ClimaCidade from './components/ClimaCidade.vue'
import CrudPosts from './components/CrudPosts.vue'

const buscarUsuario = async () => {
  try {
    const resposta = await api.get('/users/1')
    console.log('Usuário via api.js:', resposta.data)
  } catch (erro) {
    console.error('Erro ao buscar usuário:', erro)
  }
}
</script>
