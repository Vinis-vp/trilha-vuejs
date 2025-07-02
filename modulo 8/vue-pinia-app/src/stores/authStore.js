import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    usuario: null,
  }),
  actions: {
    login(usuario, token) {
      this.usuario = usuario
      this.token = token
    },
    logout() {
      this.usuario = null
      this.token = null
    },
  },
})
