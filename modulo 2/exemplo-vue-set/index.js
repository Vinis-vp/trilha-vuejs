const { createApp } = Vue

createApp({
  data() {
    return {
      lista: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  methods: {
    editar(index) {
      this.lista[index] = prompt('Novo valor:', this.lista[index]) || this.lista[index]
    }
  }
}).mount('#app')
