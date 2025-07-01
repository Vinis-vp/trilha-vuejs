const { createApp } = Vue

createApp({
  data() {
    return {
      texto: '',
      textoSalvo: ''
    }
  },
  methods: {
    salvarTexto() {
      this.textoSalvo = this.texto
    },
    limparTexto() {
      this.texto = ''
      this.textoSalvo = ''
    }
  }
}).mount('#app')
