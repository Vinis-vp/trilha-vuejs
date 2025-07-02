<template>
  <div class="container mt-5">
    <h4>Consulta de Endereço por CEP</h4>

    <div class="mb-3">
      <input
        v-model="cep"
        class="form-control"
        placeholder="Digite o CEP (somente números)"
      />
    </div>

    <button @click="buscarCep" class="btn btn-primary mb-3">Buscar</button>

    <div v-if="erroCep" class="alert alert-danger">{{ erroCep }}</div>

    <div v-if="endereco">
      <h5>Endereço:</h5>
      <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
      <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
      <p><strong>Cidade:</strong> {{ endereco.localidade }} - {{ endereco.uf }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../services/api'

const cep = ref('')
const endereco = ref(null)
const erroCep = ref('')

const buscarCep = async () => {
  erroCep.value = ''
  endereco.value = null

  try {
    const response = await api.get(`https://viacep.com.br/ws/${cep.value}/json/`)

    if (response.data.erro) {
      erroCep.value = 'CEP não encontrado. Verifique e tente novamente.'
    } else {
      endereco.value = response.data
    }
  } catch (error) {
    erroCep.value = 'Erro ao buscar o CEP. Verifique a conexão ou o formato.'
    console.error(error)
  }
}
</script>
