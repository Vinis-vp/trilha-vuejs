const { createApp } = Vue

createApp({
  data() {
    return {
      nome: ''
    }
  },
  methods: {
    enviarFormulario() {
      alert(`Nome enviado: ${this.nome}`)
    }
  }
}).mount('#app')
