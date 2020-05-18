<template>
    <div>
  <b-card>
        <div slot="header">
          <b-row>
            Case №: {{caseData._id}}
          </b-row>
        </div>
        <b-list-group class="list-group-flush">
          <b-list-group-item>
            <span>Title:</span>
            {{caseData.title}}
          </b-list-group-item>
          <b-list-group-item>
            <span>Date:</span>
            {{caseData.date}}
          </b-list-group-item>
          <b-list-group-item>
            <span>First name:</span>
            {{caseData.firstName}}
          </b-list-group-item>
          <b-list-group-item>
            <span>Second name:</span>
            {{caseData.secondName}}
          </b-list-group-item>
          <b-list-group-item>
            <span>Adress:</span>
            {{caseData.adress}}
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>
          <b-button-group>
              <router-link :to="{name: 'caseElement', params: {caseData: caseData}}">
            <b-button variant="primary">Show</b-button>
            </router-link>
          </b-button-group>
        </b-card-footer>
      </b-card>
      </div>
</template>

<script>
export default {
    name: "CasesContainerReducedItem",
    props: {
        caseData: {
          type: Object
        }
    },
    methods: {
        showCase() {
            console.log(this.caseData)
        }
    }
}
</script>

<style>

</style>
