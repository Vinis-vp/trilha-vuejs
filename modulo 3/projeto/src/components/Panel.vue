<template>
  <section class="panel">
    <header><slot name="header" /></header>
    <main><slot /></main>
    <footer><slot name="footer" /></footer>
  </section>
</template>

<style scoped>
.panel { border: 1px solid #aaa; padding: 1rem; border-radius: 6px; }
</style>
