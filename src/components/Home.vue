<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <loanform :loan="loan"></loanform>
      </div>
        <simulator :loan="loan"></simulator>
    </div>
  </div>
</template>

<script>
  import LoanForm from '@/components/LoanForm';
  import Simulator from '@/components/Simulator';
  import Loan from '../domain/loan/loan';

  export default {
    components: {
      loanform: LoanForm,
      simulator: Simulator,
    },
    name: 'home',
    data() {
      return {
        loan: new Loan(),
        msg: 'Loan simulator',
      };
    },

    methods: {
      onSubmit() {
        this.$http.post('https://httpbin.org/post')
          .then(this.$router.go('/login'));
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
