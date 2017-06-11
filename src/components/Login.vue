<template>
    <div class="container">
      <div class="row">
          <div class="col-md-offset-4 col-md-6">
              <div class="form-login">
                <h4>Bem vindo, por favor se identifique.</h4>
                <input type="text"  v-validate="{ rules: { required: true}}" id="userCnpj" class="form-control input-sm chat-input" placeholder="cnpj" />
                </br>
                <input type="password"  v-validate="{rules: {required: true}}" id="userPassword" class="form-control input-sm chat-input" placeholder="senha" />
                </br>
                <div class="wrapper">
                  <span class="group-btn">
                      <a href="#" class="btn btn-primary btn-md">Entrar</a>
                  </span>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        cnpj: '',
        passowrd: '',
      };
    },
  };
</script>

<style scoped>
  body {
  background-color:#fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}

.container {
    padding: 25px;
    position: fixed;
}

.form-login {
  background-color: #EDEDED;
  padding: 10px 20px 20px;
  border-radius: 15px;
  border: 5px #d2d2d2;
  box-shadow:0 1px 0 #cfcfcf;
}

h4 {
 border:0 solid #fff;
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}

.wrapper {
    text-align: center;
}

</style>
