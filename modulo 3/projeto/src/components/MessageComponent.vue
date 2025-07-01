<template>
  <p class="msg">{{ message }}</p>
</template>

<script>
export default {
  name: 'MessageComponent',
  data() {
    return { message: 'Olá, Vue 👋' };
  },
};
</script>

<style scoped>
.msg {
  color: #42b983;
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
