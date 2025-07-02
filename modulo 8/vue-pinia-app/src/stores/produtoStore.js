import { defineStore } from 'pinia'
import axios from 'axios'

export const useProdutoStore = defineStore('produto', {
  state: () => ({
    produtos: [],
    carregando: false,
    erro: null,
  }),
  actions: {
    async buscarProdutos() {
      this.carregando = true
      this.erro = null
      try {
        const resposta = await axios.get('https://fakestoreapi.com/products')
        this.produtos = resposta.data
      } catch (err) {
        this.erro = 'Erro ao carregar produtos'
        console.error(err)
      } finally {
        this.carregando = false
      }
    },
  },
})
