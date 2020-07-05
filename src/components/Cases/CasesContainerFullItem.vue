<template>
  <div class="case-element" >
       {{this.$store.state.isDeleted ? $router.push({name: 'cases'}).catch(err => {}) : ''}}
      <the-page-heading>
        <span>CASE №</span> {{CASE_ELEMENT && CASE_ELEMENT._id}}
      </the-page-heading>
      <b-card>
        <b-card-body>
          <b-list-group class="list-group-flush">
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Title:</span> {{CASE_ELEMENT ? CASE_ELEMENT.title : ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Title:">
                  <b-form-input type="text" :value="CASE_ELEMENT.title" @change="(title) => setTitle(title)" />
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Date:</span> {{CASE_ELEMENT ? CASE_ELEMENT.date : ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Date:">
                  <b-form-input type="text" :value="CASE_ELEMENT.date" @change="(date) => setDate(date)"/>
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Adress:</span> {{CASE_ELEMENT ? CASE_ELEMENT.adress: ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Adress:">
                  <b-form-input type="text" :value="CASE_ELEMENT.adress" @change="(adress) => setAdress(adress)"/>
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>First Name:</span> {{CASE_ELEMENT ? CASE_ELEMENT.firstName : ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="First Name:">
                  <b-form-input required type="text" :value="CASE_ELEMENT.firstName" @change="(firstName) => setFirstName(firstName)" :class="{ 'hasError': $v.caseElement.firstName.$error }"/>
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Second Name:</span> {{CASE_ELEMENT ? CASE_ELEMENT.secondName : ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Second Name:">
                  <b-form-input required type="text" :value="CASE_ELEMENT.secondName" @change="(secondName) => setSecondName(secondName)" :class="{ 'hasError': $v.caseElement.secondName.$error }"/>
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Date of birth:</span> {{CASE_ELEMENT ? CASE_ELEMENT.dob: ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Date of birth:">
                  <b-form-input type="text" :value="CASE_ELEMENT.dob" @change="(dob) => setDob(dob)"/>
                </b-input-group>
            </b-list-group-item>
            <b-list-group-item as="div">
                <b-list-group-item v-if="!isEditMode">
                  <span>Description:</span> {{CASE_ELEMENT ? CASE_ELEMENT.description : ''}}
                </b-list-group-item>
                <b-input-group v-else prepend="Description:">
                  <b-form-input type="text" :value="CASE_ELEMENT.description" @change="(description) => setDescription(description)"/>
                </b-input-group>
            </b-list-group-item>
          </b-list-group>
        </b-card-body>
        <b-card-footer>
          <b-button-group>
              <b-button class="case-element-btn-edit" v-if="!isEditMode" @click="setEditMode">Edit</b-button>
              <b-button class="case-element-btn-save" v-else @click="updateCaseElement">Save</b-button>
            <b-button class="case-element-btn-delete" variant="danger" @click="deleteCase">Delete</b-button>
          </b-button-group>
        </b-card-footer>
      </b-card>
    </div>
</template>
<script>

import ThePageHeading from '../ThePageHeading'
import { mapGetters, mapActions } from 'vuex'
import { required } from "vuelidate/lib/validators"

export default {
    name: "CasesContainerFullItem",
    components: {
        ThePageHeading
      },
    data() {
        return {
            isEditMode: false,
            // isDeleted: false
        }
    },
    validations: {
    caseElement: {
      firstName: { required },
      secondName: { required }
    }
  },
    computed: {
        ...mapGetters([
            'CASE_ELEMENT'
        ])
    },
    methods: {
        deleteCase() {
            this.setDeleted()
            this.DELETE_CASE(this.$route.params.caseId)
        },
        setDeleted() {
            return this.$store.commit('SET_DELETED')
        },
        ...mapActions([
            'GET_CASE_ELEMENT',
            'UPDATE_CASE_ELEMENT',
            'DELETE_CASE',
            'GET_CASES'
        ]),
        setEditMode() {
            return this.isEditMode = !this.isEditMode
        },
        updateCaseElement() {
          this.$v.caseElement.$touch()
      if (!this.$v.caseElement.$error) {
            let caseElementData = {caseId: this.$route.params.caseId, caseElement: this.caseElement}
            this.UPDATE_CASE_ELEMENT(caseElementData)
            this.setEditMode()
      }
        },
        setTitle(title) {
            this.caseElement.title = title
        },
        setDate(date) {
            this.caseElement.date = date
        },
        setAdress(adress) {
            this.caseElement.adress = adress
        },
        setFirstName(firstName) {
            this.caseElement.firstName = firstName
        },
        setSecondName(secondName) {
            this.caseElement.secondName = secondName
        },
        setDob(dob) {
            this.caseElement.dob = dob
        },
        setDescription(description) {
            this.caseElement.description = description
        }
    },
    updated() {
        this.caseElement = this.CASE_ELEMENT
        this.GET_CASES()
    },
      watch: {
    '$route.params': {
        handler(newValue) {
            const { caseId } = newValue
            this.GET_CASE_ELEMENT(caseId)
        },
        immediate: true
    }
}
}
</script>

<style>
.case-element {
    padding: 100px 0;
}
.case-element-header {
    font-size: 3em;
    color: #2E1114;
    padding: 25px 0;
    background-color: #f8e9a1;
}
.case-element-btn-edit, .case-element-btn-save {
    background-color: #3b945e;
    color: #2E1114;
}
.case-element-btn-edit:hover, 
.case-element-btn-edit:focus,
.case-element-btn-edit:active,
.case-element-btn-save:hover,
.case-element-btn-save:focus,
.case-element-btn-save:active  {
    background-color: #3b945e !important;
    color: #2E1114 !important;
    box-shadow: none;
}
.case-element-btn-delete {
    background-color: #f76c6c;
    color: #2E1114;
}
.case-element-btn-delete:hover,
.case-element-btn-delete:focus,
.case-element-btn-delete:active {
    background-color: #f76c6c !important;
    color: #2E1114 !important;
    box-shadow: none;
}
.hasError {
  border: 1px solid red;
}
</style>