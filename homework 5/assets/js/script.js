Vue.createApp({
                data: function(){
                        return {
                            current:"Home",
                            menus:["Home","Projects","Contacts"]
                        }
                    },
                mounted(){

                    },
                methods:{

                    },
                computed:{
                        currentTabComp(){
                            return `tab-${this.current.toLowerCase()}`
                        }
                    }
})
.component("tab-home",{
    template:`
    <div class="ordinary">
        <h2>Вы на домашней странице</h2>
    </div>`
})
.component("tab-projects",{
    template:`
    <div class="ordinary">
        <h2>Вы на странице - Проекты</h2>
    </div>`
})
.component("tab-contacts",{
    template:`
    <div class="ordinary">
        <h2>Наши контакты</h2>
    </div>`
})
.mount("#hook")