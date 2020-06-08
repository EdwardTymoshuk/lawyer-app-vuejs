<template>
  <b-modal
    id="add-case-modal"
    size="lg"
    title="To add a new case please fill the fields below:"
    @hidden="resetModal"
    hide-footer
  >
    <b-form @submit.prevent="addCase">
      <b-form-group id="title" label="Title:" label-for="title">
        <b-form-input
          id="title"
          v-model="caseElement.title"
          type="text"
          placeholder="Enter title..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="date" label="Date:" label-for="date">
        <b-form-input
          id="date"
          v-model="caseElement.date"
          type="text"
          placeholder="Enter date in format YYYY-MM-DD"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="adress" label="Adress:" label-for="adress">
        <b-form-input
          id="adress"
          v-model="caseElement.adress"
          type="text"
          placeholder="Enter adress..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="firstName" label="First Name *:" label-for="firstName">
        <b-form-input
          id="firstName"
          :class="{ 'hasError': $v.caseElement.firstName.$error }"
          v-model="caseElement.firstName"
          required
          type="text"
          placeholder="Enter First Name..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="secondName" label="Second Name *:" label-for="secondName">
        <b-form-input
          id="secondName"
          :class="{ 'hasError': $v.caseElement.secondName.$error }"
          v-model="caseElement.secondName"
          required
          type="text"
          placeholder="Enter Second Name..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="dob" label="Date of birth:" label-for="dob">
        <b-form-input
          id="dob"
          v-model="caseElement.dob"
          type="text"
          placeholder="Enter a date of birth in format YYYY-MM-DD..."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="description" label="Description:" label-for="description">
        <b-form-input
          id="description"
          v-model="caseElement.description"
          type="text"
          placeholder="Enter description..."
        ></b-form-input>
      </b-form-group>
      <b-button class="float-right" @click="addCase">Add</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      caseElement: {
        title: "",
        date: "",
        adress: "",
        firstName: "",
        secondName: "",
        dob: "",
        description: ""
      }
    };
  },
  validations: {
    caseElement: {
      firstName: { required },
      secondName: { required }
    }
  },
  methods: {
    ...mapActions(["ADD_CASE"]),
    addCase() {
      this.$v.caseElement.$touch();
      if (this.$v.caseElement.$error) return;
      this.ADD_CASE(this.caseElement);
      this.$bvModal.hide("add-case-modal");
    },
    resetModal() {
      return {
        caseElement: {
          title: "",
          date: "",
          adress: "",
          firstName: "",
          secondName: "",
          dob: "",
          description: ""
        }
      };
    }
  }
};
</script>
<style>
.hasError {
  border: 1px solid red;
}
.right-aligned {
  float: right
}
</style>