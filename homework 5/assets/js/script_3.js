Vue.createApp({
            data: function(){
                    return{
                        pics:[{
                            path:"./assets/media/pic_1.jpg",
                            name:"C++ language"
                        },
                        {
                            path:"./assets/media/pic_2.jpg",
                            name:"Python language"
                        },
                        {
                            path:"./assets/media/pic_3.png",
                            name:"HTML Markup language"
                        },
                        {
                            path:"./assets/media/pic_4.png",
                            name:"Visual Basic language"
                        },
                        {
                            path:"./assets/media/pic_5.jpg",
                            name:"PHP language"
                        },
                        {
                            path:"./assets/media/pic_6.jpg",
                            name:"Java language"
                        }]
                    }
                },
            mounted(){

                    },
            methods:{
                add: function(pic){
                this.pics.push(pic);
            }
                    },
            computed:{
                       
                    }
})
.component('piclist',{
    props:["pics"],
    template: `
        <div id="gallery">
            <picdetails v-for="(pic,index) in pics" 
            :key="pic.name"
            :pic="pic"
            :index="index"
            :removefn="remove"
            >
            </picdetails>
        </div>`,
    methods:{
            remove: function(index){
                this.pics.splice(index, 1);
                }
            }
})
.component('picdetails',{
    props:["pic","index","removefn"],
    template:`
        <div>
            <img :src="pic.path"/>
            <p>{{pic.name}}</p>
            <span class="btn" @click="removefn(index)">Удалить</span>
        </div>
    `
})
.component('addform',{
    props:["addfn"],
    data: function(){
        return {
            pic:{
                name:""
            },
            paths:[
                "./assets/media/pic_4.png",
                "./assets/media/pic_6.jpg",
                "./assets/media/pic_2.jpg"
            ],
            selected:""

        }
    },
    template: `
        <div class="addform">
            <label for="name">Имя картинки</label>
            <input type="text" v-model="pic.name" />
            <label for="path">Путь к файлу</label>
            <select name="path" v-model="selected">
              <option v-for="path in paths" >
                {{ path }}
              </option>
            </select>
            <span class="btn"  @click="addfn({name:pic.name, path: selected})">Add</span>
        </div>`
})
.mount("#hook")