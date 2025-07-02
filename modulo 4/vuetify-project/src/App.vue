<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawerAberto = !drawerAberto" />
      <v-toolbar-title class="text-center w-100">Meu Projeto Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawerAberto" temporary>
      <v-list>
        <v-list-item title="Início" />
        <v-list-item title="Sobre" />
        <v-list-item title="Contato" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="pa-4">
      <v-container>

        <v-row>
          <v-col cols="12" md="4" v-for="(coluna, index) in 3" :key="index">
            <v-card class="pa-4 text-center">
              <h3>Coluna {{ index + 1 }}</h3>
              <v-btn
                color="primary"
                class="mt-2 botao-estilizado"
                @click="clicarBotao(index)"
              >
                Clique aqui
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <v-divider class="my-6" />

        <v-card class="mx-auto" max-width="400">
          <v-img
            src="https://picsum.photos/400/200"
            height="200px"
            cover
          ></v-img>

          <v-card-title>Cartão com Imagem</v-card-title>

          <v-card-text>
            Este é um card simples com uma imagem no topo, um título e um botão com ação.
          </v-card-text>

          <v-card-actions>
            <v-btn color="secondary" @click="mostrarAlerta">Mostrar Alerta</v-btn>
          </v-card-actions>
        </v-card>

        <v-divider class="my-6" />

        <v-btn color="primary" @click="dialogVisivel = true">
          Abrir Modal
        </v-btn>

        <v-dialog v-model="dialogVisivel" max-width="500">
          <v-card>
            <v-card-title class="text-h6">Aviso</v-card-title>
            <v-card-text>
              Este é um modal simples utilizando Vuetify.
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="secondary" @click="dialogVisivel = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-divider class="my-6" />

        <h3 class="text-h6 mb-2">Tabela de Produtos</h3>
        <v-data-table
          :headers="colunasProdutos"
          :items="listaProdutos"
          class="elevation-1"
          density="compact"
        />

        <v-divider class="my-6" />

        <h3 class="text-h6 mb-2">Login</h3>

        <v-form v-model="formValido" @submit.prevent="submeterLogin">
          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="regrasEmail"
            type="email"
            required
          />
          <v-text-field
            v-model="senha"
            label="Senha"
            :rules="regrasSenha"
            type="password"
            required
          />
          <v-btn color="primary" type="submit">Entrar</v-btn>
        </v-form>
        <v-divider class="my-6" />

        <h3 class="text-h6 mb-2">Produtos da API</h3>

        <v-data-table
          :headers="headersApi"
          :items="produtosApi"
          :loading="carregandoApi"
          loading-text="Carregando produtos..."
          class="elevation-1"
          density="compact"
        />

      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const dialogVisivel = ref(false)
const drawerAberto = ref(false)

const clicarBotao = (index) => {
  console.log(`Botão da coluna ${index + 1} clicado!`)
}

const mostrarAlerta = () => {
  alert('Você clicou no botão do card!')
}

// Tabela estática de produtos
const colunasProdutos = [
  { title: 'Produto', key: 'nome' },
  { title: 'Preço (R$)', key: 'preco' },
  { title: 'Estoque', key: 'estoque' },
]

const listaProdutos = [
  { nome: 'Camiseta', preco: 49.9, estoque: 12 },
  { nome: 'Calça Jeans', preco: 120.0, estoque: 7 },
  { nome: 'Tênis', preco: 199.99, estoque: 4 },
  { nome: 'Boné', preco: 39.0, estoque: 18 },
]

// Formulário de login
const formValido = ref(false)
const email = ref('')
const senha = ref('')

const regrasEmail = [
  (v) => !!v || 'E-mail é obrigatório',
  (v) => /.+@.+\..+/.test(v) || 'E-mail inválido',
]

const regrasSenha = [
  (v) => !!v || 'Senha é obrigatória',
  (v) => v.length >= 6 || 'Mínimo de 6 caracteres',
]

const submeterLogin = () => {
  if (formValido.value) {
    alert(`Login realizado!\nEmail: ${email.value}\nSenha: ${senha.value}`)
  }
}

// Integração com API externa
const produtosApi = ref([])
const carregandoApi = ref(true)

const headersApi = [
  { title: 'Produto', key: 'title' },
  { title: 'Preço', key: 'price' },
  { title: 'Categoria', key: 'category' },
]

const carregarProdutosDaApi = async () => {
  try {
    const resposta = await fetch('https://fakestoreapi.com/products')
    const dados = await resposta.json()
    produtosApi.value = dados
  } catch (erro) {
    console.error('Erro ao carregar produtos da API:', erro)
  } finally {
    carregandoApi.value = false
  }
}

onMounted(() => {
  carregarProdutosDaApi()
})
</script>


<style scoped lang="scss">
.botao-estilizado {
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
