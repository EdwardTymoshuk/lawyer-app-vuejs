<template>
  <b-navbar expand="lg" fixed="top" class="header-container">
      <b-navbar-brand class="header-container-brand">LAWYER REACT APP</b-navbar-brand>
      <b-link class="header-container-cases"><b-button><router-link to="/cases">Cases</router-link></b-button></b-link>
      <b-form inline class="header-container-search">
            <b-form-input type="text" v-model="searchingElement"
              placeholder="Search..."
              >
            </b-form-input>
        <b-button class="header-container-search-btn" v-if="searchingElement" @click="() => searchingElement = ''">Reset</b-button>
      </b-form>
      <div class="header-container-login">
       <span class="header-container-login-greating" v-if="IS_AUTH.isAuth">Nice to see you, {{this.IS_AUTH.name}}</span>
      <b-link>
        <b-button v-if="!IS_AUTH.isAuth" class="header-container-login-btn"><router-link to="/login">Login</router-link></b-button>
        <b-button v-else class="header-container-logout-btn" @click="logOut()">Logout</b-button>
      </b-link>
      </div>
    </b-navbar>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            searchingElement: ''
        }
    },
     computed: {
    ...mapGetters([
      'CASES',
      'IS_AUTH'
    ])
  },
    methods: {
        ...mapActions([
        'GET_CASES',
        'SEARCH_CASE',
        'LOGOUT'
      ]),
        logOut() {
            this.LOGOUT().then(() => {
                this.$router.push({name: 'login'}).catch(err => {})
            })


    }
    },
    beforeUpdate() {
        this.searchingElement ? this.SEARCH_CASE(this.searchingElement) : this.GET_CASES()
    }
}
</script>

<style>
  .header-container {
    background-color: #2E1114;
    height: 100px;
    margin: 0;
    padding: 20px;
    align-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
.header-container-brand {
  color: #fff !important;
}
.header-container-brand:hover {
  color: #fff !important;
}
.header-container-cases {
    cursor: default;
}
.header-container-search {
    justify-content: center;
}
.header-container-search-btn {
    margin: 10px;
}
.header-container-search-disabled {
    cursor: not-allowed;
}
.header-container-login-greating {
    color: #f8e9a1;
    padding: 5px;
}
.header-container-login-btn{
    background-color: #3b945e;
}
.header-container-login-btn:hover{
    background-color: #3b945e !important;
}
.header-container-logout-btn{
    background-color: #f76c6c;
}
.header-container-logout-btn:hover{
    background-color: #f76c6c !important;
}
.header-container-login a {
    text-decoration: none;
    color: #2E1114;
}

/* Ipad */
@media screen and (max-width: 1024px) {
    .header-container {
        height: 100px;
        margin: 0;
        padding: 10px;
        grid-template-columns: 1fr 1fr 4fr 2fr
    }
    .header-container-search-input {
        margin-bottom: 5px;
    }
}
/* Mobile */
@media screen and (max-width: 768px) {
    .header-container {
        height: 130px;
        margin: 0;
        padding: 10px;
        grid-template-columns: 1fr 1fr;
    }
    .header-container-brand {
        font-size: 1em;
    }
    .header-container-search-input {
        margin-bottom: 5px;
    }
    .header-container-login-greating {
        font-size: .8rem;
        color: #f8e9a1;
        padding: 5px;
    }
}
</style>
