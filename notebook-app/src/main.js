import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
    state(){
        return {
            contacts:[]
        }
    },
    mutations:{
        getContacts(state, contacts){
            state.contacts = contacts
        }
    },
    actions:{
        getContacts(context){
            fetch("https://jsonplaceholder.typicode.com/users")
            //fetch("./assets.contacts.json")
            .then(res=>res.json())
            .then(data=>{
                context.commit('getContacts', data)
            })
            .catch(err=>console.log(err))
        }
    }

})

const app = createApp(App)

app.use(store)

app.mount('#app')
