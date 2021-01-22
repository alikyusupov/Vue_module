import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'


const store = createStore({
    state(){
        return {
            contacts:[],
            _contacts:[],
            removedContacts:[],
            showDeleteBtn:false,
            showModal:false
        }
    },
    mutations:{
        _getContacts(state, contacts){
            state._contacts = [...state.contacts]
            state.contacts = contacts
        },
        updateName(state, data){
            //console.log(state.contacts[0].name)//Юля

                state._contacts = [...state.contacts]

            //console.log(state.contacts[0].name, state._contacts[0].name)//Юля Юля

                state.contacts[data.position].name = data.newName

            //console.log(state.contacts[0].name, state._contacts[0].name)//Юляя Юляя
        },
        updatePhone(state, data){
            state._contacts = [...state.contacts]
            state.contacts[data.position].phone = data.newPhone
        },
        updateAddress(state, data){
            state._contacts = [...state.contacts]
            state.contacts[data.position].address = data.newAddress
        },
        _addContact(state, data){
            state._contacts = [...state.contacts]
            state.contacts.push(data)
        },
        addToRemove(state, data){
            if(state.removedContacts.indexOf(data.idx) < 0){
                state.removedContacts.push(data.idx)
            }
            else{
                let tar = state.removedContacts.indexOf(data.idx)
                state.removedContacts.splice(tar,1)
            }
        },
        switchDeleteBtn(state){
            state.showDeleteBtn = true
        },
        switchModal(state){
            state.showModal = true;
        },
        abortRemove(state){
            state.showModal = false;
        },
        getReserveState(state){
            state.contacts = state._contacts;
            state._contacts  = []
        },
        removeContacts(state){
            state._contacts = [...state.contacts]
            state.removedContacts.forEach(element => {
                state.contacts.forEach(c=>{
                    if(element===c.id){
                            let tar = state.contacts.indexOf(c)
                            state.contacts.splice(tar,1)
                    }
                })
                state.removedContacts = []
                state.showModal = false;
            });
        }
    },
    actions:{
        getContacts(context){
            fetch("data/contacts.json")
            .then(res=>res.json())
            .then(data=>{
                context.commit('_getContacts', data)
            })
            .catch(err=>console.log(err))
        },
        addContact(context, data){
            context.commit('_addContact', data)
        }
    },
    getters:{
        contacts: state => {
            return state.contacts
          }
    }
})

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')
