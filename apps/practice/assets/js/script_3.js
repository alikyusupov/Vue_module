
Vue.createApp({
            data: function(){
                    return{
                        pics:[{
                            desc:"Получить второе высшее образование",
                            rate:5
                        },
                        {
                            desc:"Вернуть долги",
                            rate:4
                        },
                        {
                            desc:"Научиться рисовать",
                            rate:3
                        }

                        ]
                    }
                },
            mounted(){

                    },
            methods:{
                add: function(pic){
                    this.pics.push(pic);
                    localStorage.setItem("key",2)
                },
                remove: function(idx){
                    this.pics.splice(idx, 1)
                }
            },
            computed:{
                       
            }
})
.component('piclist',{
    props:["pics","removefn"],
    template: `
        <div id="gallery">
            <picdetails v-for="(pic,index) in pics" 
            :key="pic.name"
            :pic="pic"
            :index="index"
            :removefn="removefn"
            >
            </picdetails>
        </div>`,
    methods:{}
})
.component('picdetails',{
    props:["pic","index","removefn"],
    template:`
        <div>
            <p>Описание - {{pic.desc}}</p>
            <p>Важность 
                <img src="../media/star.jpg">
            </p>
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
                1,
                2,
                3,
                4,
                5
            ],
            selected:""

        }
    },
    template: `
        <div class="addform">
            <label for="a">Цель</label>
            <br>
            <input name="a" type="text" v-model="pic.desc" />
            <br>
            <label for="b">Важность</label>
            <br>
            <select name="path" v-model="selected">
              <option v-for="path in paths" >
                {{ path }}
              </option>
            </select>
            <span class="btn"  @click="addfn({desc:pic.desc, rate: selected})">Add</span>
        </div>`
})
.mount("#hook")