<template>
  <form>
    <label for="loanValue">Valor do empréstimo</label>
    <div class="input-group form-group" :class="{'has-error': errors.has('loan')}">
      <span class="input-group-addon">$</span>
      <input id="loanValue"
             v-validate="{ rules: { numeric: true, required: true, max_value:100000 } }"
             v-model="loan.value"
             v-on:input.trim="loan.value" type="text"
             name="loan" class="form-control">
    </div>
    <span class='form-error' v-show="errors.has('loan')">{{ errors.first('loan') }}</span>
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

      <button @click="sendLoan()" class="btn btn-primary">Solicitar empréstimo</button>
  </form>
</template>

<script>

  export default{
    props: ['loan'],
    data() {
      return {
        timesToPay: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        loanTaxes: [3, 4, 5, 6, 7, 8],
      };
    },
    notifications: {
      showLoanError: {
        title: 'Erro',
        message: 'Empréstimo não validado',
        type: 'error',
      },
      showLoanSuccess: {
        title: 'Sucesso',
        message: 'Empréstimo validado',
        type: 'success',
      },
    },
    methods: {
      sendLoan() {
        this.$validator.validateAll().then((success) => {
          if (success) {
            this.showLoanSuccess();
            this.$router.push({ path: '/login' });
          }
        }).catch(() => {
          this.showLoanError();
        });
      },
    },
  };

</script>

<style>
  .form-error {
    color: firebrick;
  }
</style>
