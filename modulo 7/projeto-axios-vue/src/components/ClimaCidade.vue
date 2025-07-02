<template>
  <div class="container mt-5">
    <h4>Consulta de Clima</h4>

    <div class="row g-3 mb-3">
      <div class="col-md-6">
        <input
          v-model="cidade"
          class="form-control"
          placeholder="Digite o nome da cidade"
        />
      </div>

      <div v-if="erro" class="alert alert-danger mt-3">
        {{ erro }}
      </div>

      <div class="col-md-4">
        <select v-model="unidade" class="form-select">
          <option value="metric">Celsius (°C)</option>
          <option value="imperial">Fahrenheit (°F)</option>
        </select>
      </div>

      <div class="col-md-2">
        <button class="btn btn-primary w-100" @click="buscarClima">Buscar</button>
      </div>
    </div>

    <div v-if="erro" class="alert alert-danger">{{ erro }}</div>

    <div v-if="clima" class="mt-4">
      <h5>Clima em {{ clima.name }}:</h5>
      <p><strong>Temperatura:</strong> {{ clima.main.temp }}° {{ unidade === 'metric' ? 'C' : 'F' }}</p>
      <p><strong>Descrição:</strong> {{ clima.weather[0].description }}</p>
    </div>
  </div>
  <div v-if="carregando" class="text-center mt-4">
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Carregando...</span>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const carregando = ref(false)
const cidade = ref('')
const unidade = ref('metric')
const clima = ref(null)
const erro = ref('')

const buscarClima = async () => {
  erro.value = ''
  clima.value = null
  carregando.value = true

  const API_KEY = 67daa2af1564eaf1a4f60b3ea68c071a

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
        q: cidade.value,
        appid: API_KEY,
        lang: 'pt_br',
        units: unidade.value,
        },
    })

    clima.value = response.data
    } catch (err) {
        if (err.response && err.response.status === 404) {
            erro.value = 'Cidade não encontrada. Verifique o nome e tente novamente.'
    } else {
        erro.value = 'Erro ao buscar dados climáticos. Tente novamente mais tarde.'
    }
  console.error(err)
  }

}

</script>
