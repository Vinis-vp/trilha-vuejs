<template>
  <div class="container mt-5">
    <h2>Área Protegida</h2>
    <p>Somente usuários autenticados veem isso.</p>
    <button class="btn btn-danger" @click="logoutUser">Sair</button>
  </div>
</template>

<script setup>
import { logout } from '@/services/auth'

const logoutUser = () => {
  logout()
  window.location.href = '/'
}
</script>
