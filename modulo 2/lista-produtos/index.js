const { createApp } = Vue

createApp({
  data() {
    return {
      produtos: [
        { nome: 'Teclado', preco: 100.00, quantidade: 2, editando: false },
        { nome: 'Mouse', preco: 50.00, quantidade: 5, editando: false },
        { nome: 'Monitor', preco: 900.00, quantidade: 1, editando: false }
      ]
    }
  },
  methods: {
    editar(index) {
      const produto = this.produtos[index]
      if (produto.editando) {
        // aqui salvaria a alteração
        produto.editando = false
      } else {
        produto.editando = true
      }
    }
  }
}).mount('#app')
