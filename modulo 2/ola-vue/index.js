const { createApp } = Vue

createApp({
  data() {
    return {
      mensagem: 'Olá, Vue.js!'
    }
  },
  methods: {
    alterarMensagem() {
      this.mensagem = 'Mensagem alterada com sucesso!'
    }
  }
}).mount('#app')
