<template>
  <section class="login">
    <the-page-heading>Login</the-page-heading>
    <b-form class="login-form" @submit.prevent="login" @keyup.enter="login">
      <b-form-group id="email" label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="loginForm.email"
          type="email"
          placeholder="Enter your email..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="loginForm.password"
          type="password"
          placeholder="Enter your password..."
        ></b-form-input>
      </b-form-group>
      <b-button class="float-right" @click="login">Login</b-button>
    </b-form>
    <span>Don`t have an account? Please click <router-link to="/registration">here</router-link> for registration.</span> 
  </section>
</template>

<script>
import ThePageHeading from "./ThePageHeading";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    ThePageHeading
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["IS_AUTH"])
  },
  methods: {
    ...mapActions(["LOGIN_ME", "AUTH_ME"]),
    login() {
      return this.LOGIN_ME(this.loginForm).then(() => {
        this.$router.push("/cases");
      });
    }
  }
};
</script>

<style>
.login {
  padding: 100px 0 50px 0;
  display: grid;
  justify-content: center;
  align-content: flex-start;
}
.login-form {
  width: 50vw;
  justify-self: center;
}
</style>