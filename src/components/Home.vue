<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <form>
          <label for="loanValue">Valor do empréstimo</label>
          <div class="input-group form-group" :class="{'has-error': errors.has('loan')}">
            <span class="input-group-addon">$</span>
            <input id="loanValue"
                   v-validate="{ rules: { required: true, max_value:100000 } }"
                   v-model="loan.value"
                   v-on:input.trim="loan.value" type="text"
                   name="loan" class="form-control">
          </div>
          <span v-show="errors.has('loan')">{{ errors.first('loan') }}</span>
          <div class="form-group">
            <label for="loanTimesPay">Meses para pagar</label>
            <select class="form-control" v-model="loan.timeSelected"
                    id="loanTimesPay">
              <option disabled value="">Escolha um tempo para o pagamento</option>
              <option v-for="timetoPay in timesToPay"
                      v-bind:value="timetoPay">{{ timetoPay }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="loanTax">Juros</label>
            <select class="form-control" id="loanTax" v-model="loan.taxSelected">
              <option disabled value="">Escolha um taxa de juros</option>
              <option v-for="loanTax in loanTaxes"
                      v-bind:value="loanTax">{{ loanTax }}
              </option>
            </select>
          </div>

          <router-link to="/login">
            <button type="submit" class="btn btn-primary">Solicitar empréstimo</button>
          </router-link>
        </form>
      </div>
      <div class=" col-md-6 jumbotron">
        <h1>Simulação</h1>
        <p><b>Empréstimo pego:</b> R${{ loan.value }}</p>
        <p><b>Taxa de juros ao mês:</b> {{ loan.taxSelected }}%</p>
        <p><b>Meses para pagar:</b> {{ loan.timeSelected }}</p>
        <p><b>Montante:</b> R${{ simulateLoan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import LoanForm from '@/components/LoanForm';
  import Loan from '../domain/loan/loan';

  export default {
    components: {
      loanform: LoanForm,
    },
    name: 'home',
    data() {
      return {
        loan: new Loan(),
        timesToPay: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        loanTaxes: [3, 4, 5, 6, 7, 8],
        msg: 'Loan simulator',
      };
    },
    computed: {
      simulateLoan() {
        if (this.loan.value && this.loan.value < 100000 && this.loan.taxSelected
          && this.loan.timeSelected) {
          const fixedTax = this.loan.taxSelected / 100;
          return this.loan.value * (1 + (fixedTax * this.loan.timeSelected));
        }
        return '';
      },
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
