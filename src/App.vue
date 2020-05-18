<template>
  <div id="app">
    <the-main-wrapper></the-main-wrapper>
  </div>
</template>

<script>

import TheMainWrapper from './components/TheMainWrapper'

export default {
  name: 'App',
  components: {
    TheMainWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.btn {
  color: #2E1114;
  background-color: #f8e9a1;
  border: 0;
  transition: ease-in-out .2s;
}
.btn:hover,
.btn:focus,
.btn:active {
  background-color: #f8e9a1 !important;
  color: #2E1114 !important;
  box-shadow: none;
}
.btn:hover {
  border-radius: 10px;
}
.btn a {
  color: #2E1114;
  text-decoration: none;
}
</style>
