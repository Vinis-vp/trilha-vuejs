<template>
  <ChildProp :text="parentMessage" />
</template>

<script>
import ChildProp from './ChildProp.vue';

export default {
  components: { ChildProp },
  data() {
    return { parentMessage: 'Mensagem do Pai!' };
  },
};
</script>
