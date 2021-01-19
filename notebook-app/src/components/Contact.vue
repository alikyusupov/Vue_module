<template>
    <div class="container">
        <section class="avatarHolder">
            <img class="avatar" src="../assets/img/woman.png">
            <br>
            <span class="btn">Change Avatar</span>
        </section>
        <section class="infoHolder">
            <div class="details">
                <p>Name <span>{{index}}</span></p>
                <p @click="edit = true"  v-show="!edit">{{txt}}</p>
                <input style='width:20em'
                    v-show="edit" 
                    type="text" 
                    size="150"
                    v-model="txt"
                    >
                <span @click="edit = true" v-show="!edit" class="btn">edit</span>
                <span @click="edit = false" v-show="edit" class="btn">save</span>
            </div>
            <div class="details">
                <p>Phone</p>
                <p>{{person.phone}}</p>
                <span class="btn">edit</span>
            </div>
            <div class="details">
                <p>Address</p>
                <p>{{person.address.city}} {{person.address.street}}</p>
                <span class="btn">edit</span>
            </div>
        </section>
        <section class="btn dt-btn">
            <p>Details</p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props:["person","index"],
    data(){
        return {
            edit:false,
            txt:this.$store.state.contacts[0].name
        }
    },
    methods:{
        
    },
    mounted(){
        this.$store.dispatch("getContacts");
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
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        border: 2px solid lightsalmon;
        border-radius: 10px;
        box-shadow:3px 3px 5px 0px rgba(50, 50, 50, 0.48);
    }
    p{
        font-weight: bold;
    }
    .avatarHolder{
        text-align: center;
        border-radius: 10px;
    }
    .infoHolder{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        border-radius: 10px;
        margin-top: 10px;
    }
    .avatar{
        max-width: 100px;
        padding: 3px;
    }
    .details{
        display: flex;
        justify-content: space-between;
        
    }
    .details p{
        padding-right: 5px;
    }
    .btn{
        padding: 3px;
        border: 1px solid gray;
        border-radius: 5px;
        transition: all .3s ease-out;
    }
    .dt-btn{
        max-width: 150px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }
    .btn:hover{
        cursor: pointer;
        background-color: rgba(50, 50, 50, 0.48);
        color: seashell;
        transition: all .3s ease-in;
    }
    @media (max-width: 960px){
        .avatarHolder, .infoHolder{
            width: 100%;
        }
        .details{
            padding: 15px;
        }
    }
</style>
