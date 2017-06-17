<template>
    <div class="container">
      <div class="row">
          <div class="col-md-offset-4 col-md-6">
              <div class="form-login" >
                <h4>Bem vindo, por favor se identifique.</h4>
                <form id="loginForm" name="loginForm">
                  <div :class="{'has-error': errors.has('email')}" class="form-group">
                    <input  type="text" v-model="email" name="email" v-validate="{ rules: { required: true, email: true}}" id="userEmail" class="form-control input-sm chat-input" placeholder="E-mail" />
                    <span class="form-error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </br>
                  </div>
                  <div :class="{'has-error': errors.has('cnpj')}" class="form-group">
                    <input type="text" v-model="cnpj" name="cnpj" v-validate="{rules: {required: true, numeric: true}}" id="userCnpj" class="form-control input-sm chat-input" placeholder="Cnpj" />
                    <span class="form-error" v-show="errors.has('cnpj')">{{ errors.first('cnpj') }}</span>
                    </br>
                  </div>
                </form>
                <div class="wrapper">
                  <span class="group-btn">
                      <button @click="sendLogin()" class="btn btn-primary btn-md">Entrar</button>
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
        email: '',
      };
    },
    methods: {
      sendLogin() {
        this.$validator.validateAll()
          .then((success) => {
            if (success) {
              const data = { cnpj: this.cnpj, email: this.email };
              this.$http.post('https://httpbin.org/post', data)
                .then(() => {
                  this.$router.push('/');
                  // eslint-disable-next-line
                }, err => console.log(err));
            }
          });
      },
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

.form-error {
  color: firebrick;
}

.wrapper {
    text-align: center;
}

</style>
