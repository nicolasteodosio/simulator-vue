<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <loanform :taxSelected="taxSelected" :timeSelected="timeSelected" :loan="loan"
          :timesToPay="timesToPay" :loanTaxes="loanTaxes"></loanform>
      </div>
      <simulator :simulateLoan="simulateLoan()"
                 :loan="loan" :taxSelected="taxSelected" :timeSelected="timeSelected"></simulator>
    </div>
  </div>
</template>

<script>
  import Simulator from '@/components/Simulator';
  import LoanForm from '@/components/LoanForm';

  export default {
    components: {
      simulator: Simulator,
      loanform: LoanForm,
    },
    name: 'home',
    data() {
      return {
        loan: '',
        taxSelected: '',
        timeSelected: '',
        msg: 'Loan simulator',
        timesToPay: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        loanTaxes: [3, 4, 5, 6, 7, 8],
      };
    },
    computed: {
      simulateLoan() {
        if (this.loan && this.loan < 100000 && this.taxSelected && this.timeSelected) {
          const fixedTax = this.taxSelected / 100;
          return this.loan * (1 + (fixedTax * this.timeSelected));
        }
        return '';
      },
      methods: {
        onSubmit() {
          if (this.loan && this.loan < 100000 && this.taxSelected && this.timeSelected) {
            this.$http.post('https://httpbin.org/post')
              .then(this.$router.go('/login'));
          }
        },
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
