<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MinhaApp</a>

      <!-- Botão hambúrguer -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links do menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Início</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Layout de colunas (já existente) -->
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-3 bg-primary text-white p-3">Coluna 1</div>
      <div class="col-12 col-md-6 bg-success text-white p-3">Coluna 2</div>
      <div class="col-12 col-md-3 bg-warning text-dark p-3">Coluna 3</div>
    </div>
  </div>
  <div class="text-center mt-4">
    <button
      :class="['btn', 'btn-lg', corBotao]"
      @click="alternarCor"
    >
      Clique para mudar de cor
    </button>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const cores = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
const indiceAtual = ref(0)
const corBotao = ref(cores[indiceAtual.value])

const alternarCor = () => {
  indiceAtual.value = (indiceAtual.value + 1) % cores.length
  corBotao.value = cores[indiceAtual.value]
}
</script>
