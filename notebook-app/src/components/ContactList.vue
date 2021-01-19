<template>
    <main class="wrapper">
        <contact v-for="(person,index) in contacts" :key="index" :person="person" :index="index">

        </contact>
    </main> 
</template>

<script>
import Contact from './Contact.vue'
export default {
  components: { Contact },
  name: 'ContactList',
  mounted(){
        this.$store.dispatch("getContacts");
        if(!localStorage.getItem("contacts"))
            localStorage.setItem("contacts", JSON.stringify(this.$store.state.contacts))
    },
    computed:{
        contacts(){
            return this.$store.state.contacts
        }   
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper{
        max-width: 1280px;
        margin:0 auto;
    }
    p{
        font-weight: bold;
    }
</style>
