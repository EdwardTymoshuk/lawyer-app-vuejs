    <template>
  <div class="cases-container">
    <the-page-heading>ALL CASES</the-page-heading>
    <div>
      <b-button v-b-modal.add-case-modal class="cases-container-button" variant="dark" >
        <b-icon class="cases-container-button-icon"  icon="plus" font-scale="5" />
      </b-button>
    </div>
    <div class="cases-container-body">
      <cases-container-reduced-item
        v-for="item in CASES"
        :key="item._id" 
        :caseData="item"
      />
      <cases-container-add-case />
    </div>
  </div>
</template>

<script>

import ThePageHeading from '../ThePageHeading'
import CasesContainerReducedItem from './CasesContainerReducedItem'
import CaseContainerFullItem from './CasesContainerFullItem'
import CasesContainerAddCase from './CasesContainerAddCase'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "CasesContainer",
  components: {
        ThePageHeading,
        CasesContainerReducedItem,
        CaseContainerFullItem,
        CasesContainerAddCase
      },
  data() {
    return {
      cases: [],
      isModal: false
    }
  },
  computed: {
    ...mapGetters([
      'CASES'
    ])
  },
  methods: {
      ...mapActions([
        'GET_CASES',
      ])
    },
    mounted() {
     this.GET_CASES().then(response => {
       this.cases = response
     }
     )
    }
}
</script>
<style>
.card-footer {
  border: none;
  background: none;
}
.cases-container {
  padding: 100px 0 50px 0;
  display: grid;
  justify-content: center;
  align-content: flex-start;
}
.cases-container-button {
  background-color: transparent;
  color: #2e1114;
  transition: ease-in-out 0.4s;
}
.cases-container-button:hover,
.cases-container-button:active,
.cases-container-button:focus {
  background: transparent !important;
  transform: rotate(180deg);
  color: #3b945e;
}
.cases-container-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.cases-container-body-error {
  width: 100%;
  height: auto;
}
.cases-container-body-error span {
  font-size: 10em;
  color: red;
}
.cases-container-body .card {
  margin: 25px;
}
.cases-container-button button {
  background-color: inherit;
}
.cases-container-preloader {
  display: grid;
  justify-self: center;
  padding-top: 50vh;
}
@media screen and (max-width: 1024px) {
  .cases-container-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 640px) and (max-width: 768px) {
  .cases-container-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 639px) {
  .cases-container-body {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>