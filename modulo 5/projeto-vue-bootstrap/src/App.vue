<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MinhaApp</a>

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
  <div class="container mt-5">
    <div class="card mx-auto" style="width: 18rem;">
      <img
        src="https://picsum.photos/300/200"
        class="card-img-top"
        alt="Imagem aleatória"
      />
      <div class="card-body text-center">
        <h5 class="card-title">Meu Card</h5>
        <p class="card-text">Este é um exemplo de card usando Bootstrap com Vue.</p>
        <button class="btn btn-secondary" @click="exibirAlerta">Mostrar Alerta</button>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-4 mb-3">
        <div class="p-3 bg-light border rounded">Seção Esquerda</div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="p-3 bg-white border rounded shadow-sm">Seção Central</div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="p-3 bg-light border rounded">Seção Direita</div>
      </div>
    </div>
  </div>
  <div class="container mt-5 text-center">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#meuModal"
    >
      Abrir Modal
    </button>

    <div
      class="modal fade"
      id="meuModal"
      tabindex="-1"
      aria-labelledby="meuModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="meuModalLabel">Título do Modal</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            ></button>
          </div>
          <div class="modal-body">
            Esta é uma mensagem dentro do modal Bootstrap.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container mt-5">
    <h3 class="mb-4">Formulário de Cadastro</h3>

    <form @submit.prevent="enviarFormulario" novalidate>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="nome" class="form-label">Nome</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            class="form-control"
            :class="{ 'is-invalid': validar && !nome }"
            required
          />
          <div class="invalid-feedback">Nome é obrigatório.</div>
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            :class="{ 'is-invalid': validar && !emailValido }"
            required
          />
          <div class="invalid-feedback">Digite um e-mail válido.</div>
        </div>
      </div>

      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input
          type="password"
          id="senha"
          v-model="senha"
          class="form-control"
          :class="{ 'is-invalid': validar && senha.length < 6 }"
          required
        />
        <div class="invalid-feedback">Senha deve ter no mínimo 6 caracteres.</div>
      </div>

      <button type="submit" class="btn btn-success">Cadastrar</button>
    </form>
  </div>
  <div class="container mt-5">
    <h3 class="mb-4">Sistema de Abas</h3>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: abaAtiva === 'perfil' }"
          @click="abaAtiva = 'perfil'"
        >
          Perfil
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: abaAtiva === 'configuracoes' }"
          @click="abaAtiva = 'configuracoes'"
        >
          Configurações
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          :class="{ active: abaAtiva === 'ajuda' }"
          @click="abaAtiva = 'ajuda'"
        >
          Ajuda
        </button>
      </li>
    </ul>

    <div class="border rounded-bottom p-4">
      <div v-if="abaAtiva === 'perfil'">
        <h4>Perfil do Usuário</h4>
        <p>Informações do perfil e preferências.</p>
      </div>
      <div v-else-if="abaAtiva === 'configuracoes'">
        <h4>Configurações</h4>
        <p>Preferências de conta e sistema.</p>
      </div>
      <div v-else-if="abaAtiva === 'ajuda'">
        <h4>Ajuda</h4>
        <p>Seção de ajuda e suporte.</p>
      </div>
    </div>
  </div>


</template>

<style>
.card {
  border-radius: 15px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>


<script setup>

import { ref, computed } from 'vue'

const cores = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
const indiceAtual = ref(0)
const corBotao = ref(cores[indiceAtual.value])

const alternarCor = () => {
  indiceAtual.value = (indiceAtual.value + 1) % cores.length
  corBotao.value = cores[indiceAtual.value]
}

const exibirAlerta = () => {
  alert('Você clicou no botão do card!')
}

const nome = ref('')
const email = ref('')
const senha = ref('')
const validar = ref(false)

const emailValido = computed(() => /.+@.+\..+/.test(email.value))

const enviarFormulario = () => {
  validar.value = true

  if (nome.value && emailValido.value && senha.value.length >= 6) {
    alert(`Cadastro realizado com sucesso!\nNome: ${nome.value}`)
    // Resetar formulário
    nome.value = ''
    email.value = ''
    senha.value = ''
    validar.value = false
  }
}

const cores = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
const indiceAtual = ref(0)
const corBotao = ref(cores[indiceAtual.value])
const alternarCor = () => {
  indiceAtual.value = (indiceAtual.value + 1) % cores.length
  corBotao.value = cores[indiceAtual.value]
}

// botão alerta do card
const exibirAlerta = () => {
  alert('Você clicou no botão do card!')
}

// formulário com validação
const nome = ref('')
const email = ref('')
const senha = ref('')
const validar = ref(false)
const emailValido = computed(() => /.+@.+\..+/.test(email.value))
const enviarFormulario = () => {
  validar.value = true
  if (nome.value && emailValido.value && senha.value.length >= 6) {
    alert(`Cadastro realizado com sucesso!\nNome: ${nome.value}`)
    nome.value = ''
    email.value = ''
    senha.value = ''
    validar.value = false
  }
}

// abas dinâmicas
const abaAtiva = ref('perfil')

</script>
