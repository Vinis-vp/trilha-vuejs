const { createApp } = Vue

createApp({
  data() {
    return {
      dados: []
    }
  },
  created() {
    console.log('O componente foi criado.')
  },
  mounted() {
    console.log('O componente foi montado. Iniciando requisição simulada...')
    setTimeout(() => {
      this.dados = ['Item 1', 'Item 2', 'Item 3']
      console.log('Dados carregados.')
    }, 2000)
  }
}).mount('#app')
