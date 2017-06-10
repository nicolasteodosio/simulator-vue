<template>
  <div class="home container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <!--{{ loanValid }}-->
        <form>
          <label for="loanValue">Valor do empréstimo</label>
          <div class="input-group form-group" :class="{'has-error': errors.has('loan')}">
            <span class="input-group-addon">$</span>
            <input id="loanValue"
                   v-validate="{ rules: { required: true, max_value:100000 } }"
                   v-on:input="loan = $event.target.value" type="text"
                   name="loan" class="form-control">
          </div>
          <span v-show="errors.has('loan')">{{ errors.first('loan') }}</span>
          <div class="form-group">
            <label for="loanTimesPay">Meses para pagar</label>
            <select class="form-control" v-model="timeSelected"
                    id="loanTimesPay">
              <option  v-for="timetoPay in timesToPay"
                       v-bind:value="timetoPay">{{ timetoPay }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="loanTax">Juros</label>
            <select class="form-control" id="loanTax" v-model="taxSelected">
              <option  v-for="loanTax in loanTaxes"
                       v-bind:value="loanTax">{{ loanTax }}</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
      <div class=" col-md-6 jumbotron">
        <h1>Simulação</h1>
        <p> <b>Empréstimo pego:</b> R${{ loan }}</p>
        <p> <b>Taxa de juros ao mês:</b> {{ taxSelected }}%</p>
        <p> <b>Meses para pagar:</b> {{ timeSelected }}</p>
        <p> <b>Montante:</b> R${{ simulateLoan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        loan: '',
        taxSelected: '',
        timeSelected: '',
        msg: 'Vue simulator',
        timesToPay: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        loanTaxes: [3, 4, 5, 6, 7, 8],
      };
    },
    computed: {
      simulateLoan() {
        if (this.loan && this.taxSelected && this.timeSelected) {
          const fixedTax = this.taxSelected / 100;
          return this.loan * (1 + (fixedTax * this.timeSelected));
        }
        return '';
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .center {
    text-align: center;

  }
</style>
