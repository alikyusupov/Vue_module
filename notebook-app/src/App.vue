<template>
  <h1 align="center">Мои контакты</h1>
  <ContactList/>
</template>

<script>

import ContactList from './components/ContactList.vue';

export default {
  name: 'App',
  components: {
    ContactList
  }
}
</script>

<style>
@font-face {
    font-family: 'prettyFont'; /*a name to be used later*/
    src: url("./assets/pretty_font.ttf"); /*URL to font*/
}
*{
    font-family: 'prettyFont'; /*a name to be used later*/
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
  margin-top: 10px;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
