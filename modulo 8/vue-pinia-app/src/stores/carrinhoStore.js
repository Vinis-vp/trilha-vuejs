import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: [],
  }),

  getters: {
    totalCarrinho: (state) => {
      return state.itens.reduce((total, item) => {
        return total + item.price * item.quantidade
      }, 0)
    },
  },

  actions: {
    adicionarProduto(produto) {
      const existente = this.itens.find((p) => p.id === produto.id)
      if (existente) {
        existente.quantidade++
      } else {
        this.itens.push({ ...produto, quantidade: 1 })
      }
    },

    removerProduto(produtoId) {
      const index = this.itens.findIndex((p) => p.id === produtoId)
      if (index !== -1) {
        const item = this.itens[index]
        if (item.quantidade > 1) {
          item.quantidade--
        } else {
          this.itens.splice(index, 1)
        }
      }
    },

    limparCarrinho() {
      this.itens = []
    },
  },
})
