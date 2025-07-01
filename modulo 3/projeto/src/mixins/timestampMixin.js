export default {
    data() {
      return { createdAt: new Date().toLocaleString() };
    },
    methods: {
      logCreation() {
        console.log(`Criado em ${this.createdAt}`);
      },
    },
    created() {
      this.logCreation();
    },
  };
  