<template>
  <div class="container mt-5">
    <h3>Área Protegida</h3>
    <p v-if="mensagem">{{ mensagem }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const mensagem = ref('')
const router = useRouter()

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/login')
    return
  }

  try {
    const res = await axios.get('http://localhost:3000/protegido', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    mensagem.value = res.data.mensagem
  } catch (err) {
    localStorage.removeItem('token')
    router.push('/login')
  }
})
</script>
