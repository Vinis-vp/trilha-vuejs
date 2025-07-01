const { createApp } = Vue

createApp({
  data() {
    return {
      novoItem: {
        nome: '',
        preco: 0,
        quantidade: 1
      },
      carrinho: []
    }
  },
  computed: {
    totalGeral() {
      return this.carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0)
    }
  },
  methods: {
    adicionarItem() {
      this.carrinho.push({ ...this.novoItem }) // copia o objeto
      this.novoItem.nome = ''
      this.novoItem.preco = 0
      this.novoItem.quantidade = 1
    },
    removerItem(index) {
      this.carrinho.splice(index, 1)
    }
  }
}).mount('#app')
