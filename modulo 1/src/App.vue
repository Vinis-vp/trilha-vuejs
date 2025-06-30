<script setup>
import FormularioUsuario from './components/FormularioUsuario.vue'
import BuscaCep from './components/BuscaCep.vue'
</script>

<template>
  <h1>Cadastro de Usuários</h1>
  <FormularioUsuario />

  <hr />

  <h1>Consulta de CEP</h1>
  <BuscaCep />

  <hr />

  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
