<template>
  <div class=" col-md-6 jumbotron">
    <h1>Simulação</h1>
    <p><b>Empréstimo pego:</b> R${{ loan.value }}</p>
    <p><b>Taxa de juros ao mês:</b> {{ loan.taxSelected }}%</p>
    <p><b>Meses para pagar:</b> {{ loan.timeSelected }}</p>
    <p><b>Montante:</b> R${{ simulateLoan }}</p>
  </div>
</template>

<script>
  export default{
    props: ['loan'],

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
  };
</script>

<style></style>
