const { createApp } = Vue

createApp({
  data() {
    return {
      form: {
        nome: '',
        genero: '',
        interesses: [],
        cidade: ''
      }
    }
  }
}).mount('#app')
