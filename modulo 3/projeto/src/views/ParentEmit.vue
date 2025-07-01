<template>
  <div>
    <p>Total de cliques: {{ total }}</p>
    <ChildEmit @update-count="total += $event" />
  </div>
</template>

<script>
import ChildEmit from './ChildEmit.vue';
export default { components: { ChildEmit }, data: () => ({ total: 0 }) };
</script>
