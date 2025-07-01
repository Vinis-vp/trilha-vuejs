<template>
  <form @submit.prevent="$emit('submit')">
    <slot name="header" />
    <div class="fields"><slot /></div>
    <slot name="actions">
      <button type="submit">Enviar</button>
    </slot>
  </form>
</template>

<style scoped>
.fields { display: flex; flex-direction: column; gap: .5rem; margin:1rem 0; }
</style>
