<template>
  <b-navbar expand="lg" fixed="top" class="header-container">
      <b-navbar-brand class="header-container-brand" >LAWYER REACT APP</b-navbar-brand>
      <b-link class="header-container-cases"><b-button><router-link to="/cases">Cases</router-link></b-button></b-link>
      <b-form inline class="header-container-search">
            <b-form-input type="text"
              placeholder="Search..."
              >
            </b-form-input>
        <b-button class="header-container-search-btn">Search</b-button>
      </b-form>
      <b-link class="header-container-login">
        <b-button class="header-container-login-btn">Login</b-button>
      </b-link>
    </b-navbar>
</template>

<script>
export default {

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
