<template>
  <div class="container mt-5">
    <h3>Gerenciar Posts</h3>

    <!-- Formulário -->
    <form @submit.prevent="salvarPost" class="mb-4">
      <div class="mb-3">
        <label class="form-label">Título</label>
        <input type="text" v-model="post.titulo" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Conteúdo</label>
        <textarea v-model="post.conteudo" class="form-control" required></textarea>
      </div>
      <button type="submit" class="btn btn-success">
        {{ post.id ? 'Atualizar' : 'Adicionar' }}
      </button>
      <button type="button" class="btn btn-secondary ms-2" @click="limparFormulario" v-if="post.id">Cancelar</button>
    </form>

    <!-- Lista de Posts -->
    <ul class="list-group">
      <li
        v-for="item in posts"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h6>{{ item.title }}</h6>
          <small>{{ item.body }}</small>
        </div>
        <div>
          <button class="btn btn-sm btn-primary me-2" @click="editarPost(item)">Editar</button>
          <button class="btn btn-sm btn-danger" @click="deletarPost(item.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const post = ref({ titulo: '', conteudo: '', id: null })

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

// Buscar todos
const carregarPosts = async () => {
  const res = await axios.get(API_URL + '?_limit=5') // limitando a 5 para teste
  posts.value = res.data
}

// Criar ou atualizar
const salvarPost = async () => {
  if (post.value.id) {
    await axios.put(`${API_URL}/${post.value.id}`, {
      id: post.value.id,
      title: post.value.titulo,
      body: post.value.conteudo,
    })
  } else {
    await axios.post(API_URL, {
      title: post.value.titulo,
      body: post.value.conteudo,
    })
  }
  await carregarPosts()
  limparFormulario()
}

// Editar
const editarPost = (item) => {
  post.value = {
    id: item.id,
    titulo: item.title,
    conteudo: item.body,
  }
}

// Excluir
const deletarPost = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
  await carregarPosts()
}

const limparFormulario = () => {
  post.value = { titulo: '', conteudo: '', id: null }
}

onMounted(() => carregarPosts())
</script>
