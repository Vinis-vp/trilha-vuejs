<!-- src/components/BuscaCep.vue -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cep = ref('')
const dados = ref(null)

const buscar = async () => {
  if (cep.value.length === 8) {
    const res = await axios.get(`https://viacep.com.br/ws/${cep.value}/json`)
    dados.value = res.data
  }
}
</script>

<template>
  <div>
    <input v-model="cep" placeholder="Digite o CEP (somente números)" />
    <button @click="buscar">Buscar</button>

    <div v-if="dados">
      <p>Logradouro: {{ dados.logradouro }}</p>
      <p>Bairro: {{ dados.bairro }}</p>
      <p>Cidade: {{ dados.localidade }}</p>
      <p>Estado: {{ dados.uf }}</p>
    </div>
  </div>
</template>
