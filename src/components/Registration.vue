<template>
  <section class="registration">
    <the-page-heading>Registration</the-page-heading>
    <b-form class="registration-form" @submit.prevent="registration" @keyup.enter="registration">
      <b-form-group id="name" label="Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="registrationForm.name"
          type="text"
          placeholder="Enter your name..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="email" label="Email:" label-for="email">
        <b-form-input
          id="email"
          v-model="registrationForm.email"
          type="email"
          placeholder="Enter your email..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="registrationForm.password"
          type="password"
          placeholder="Enter your password..."
        ></b-form-input>
      </b-form-group>
      <b-button class="float-right" @click="registration">Sign up</b-button>
    </b-form>
  </section>
</template>

<script>
import ThePageHeading from "./ThePageHeading";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Registration",
  components: {
    ThePageHeading
  },
  data() {
    return {
      registrationForm: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["IS_AUTH"])
  },
  methods: {
    ...mapActions([
      "REGISTER_ME", 
      "AUTH_ME"
      ]),
    registration() {
      this.REGISTER_ME(this.registrationForm);
    }
  }
};
</script>

<style>
.registration {
  padding: 100px 0 50px 0;
  display: grid;
  justify-content: center;
  align-content: flex-start;
}
.registration-form {
  width: 50vw;
  justify-self: center;
}
</style>