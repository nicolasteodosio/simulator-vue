<template>
  <div class=" col-md-6 jumbotron">
    <h1>Simulação</h1>
    <p><b>Empréstimo pego:</b> R${{ loan }}</p>
    <p><b>Taxa de juros ao mês:</b> {{ taxSelected }}%</p>
    <p><b>Meses para pagar:</b> {{ timeSelected }}</p>
    <p><b>Montante:</b> R${{ simulateLoan }}</p>
  </div>
</template>

<script>

  export default{
    props: ['loan', 'taxSelected', 'timeSelected', 'simulateLoan'],
  };
</script>

<style></style>
