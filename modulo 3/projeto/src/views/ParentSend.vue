<template>
  <button @click="send">Enviar mensagem</button>
  <ChildReceive :message="msg" />
</template>

<script>
import ChildReceive from './ChildReceive.vue';
export default {
  components: { ChildReceive },
  data: () => ({ msg: '' }),
  methods: {
    send() {
      this.msg = `Enviado às ${new Date().toLocaleTimeString()}`;
    },
  },
};
</script>
