Vue.createApp({
            data: function(){
                    return{
                        pics:[{
                            desc:"Target 1",
                            rate:5
                        },
                        {
                            desc:"Target 2",
                            rate:4
                        }],
                        completed:[]
                    }
                },
            mounted(){
                if (localStorage.getItem('pics')){
                    this.pics = JSON.parse(localStorage.getItem('pics'))
                }
            },
            methods:{
                add: function(pic){
                    this.pics.push(pic);
                    localStorage.setItem('pics',JSON.stringify(this.pics))
                },
                remove: function(idx){
                    this.completed.push(this.pics[idx])
                    this.pics.splice(idx, 1)
                    localStorage.setItem('pics',JSON.stringify(this.pics))
                },
                mynewsort(){
                    this.pics.sort(
                        (first,second)=>{
                            return second.rate - first.rate
                        }
                    )
                },
                mainchange(obj){
                    this.pics[obj.index].desc = obj.text;
                    localStorage.setItem('pics',JSON.stringify(this.pics)) 
                }
            },
            computed:{ 
                length(){
                    return this.pics.length
                }       
                    },
            watch:{
                length(){
                    if (this.pics.length){console.log("adasdas")}
                    else{console.log("1212")}
                }
            },
})
.component('piclist',{
    props:["pics","removefn","completed"],
    template: `
        <div id="gallery">
            <picdetails v-for="(pic,index) in pics" 
            :key="pic.name"
            :pic="pic"
            :pics="pics"
            :index="index"
            :removefn="removefn"
            @changetext="$emit('acceptchange',$event)"
            >
            </picdetails>
        </div>
        <div v-if="completed.length">
        Список выполненых задач
        <ul>
            <li v-for="(complete,index) in completed">{{index+1}}.{{complete.desc}}</li>
        </ul>
        </div>`,
    methods:{}
})
.component('picdetails',{
    data(){
        return {
            defaultText: "Редактировать цель",
            display:true,
        }
    },
    methods:{
        swap(){
            this.display =! this.display
        },
        save(){
            this.$emit('changetext',{index:this.index,text:this.defaultText})
            this.display =! this.display
        },
        checkRating: function(n, pic){
            return (pic.rate - n >= 0)? String.fromCharCode(9733): "";
        },
    },
    props:["pic","index","removefn","pics"],
    template:`
        <div>
            <p v-if="display" @click="swap">{{pic.desc}}</p>
            <input v-if="!display" type="text" v-model="defaultText"><button v-if="!display" @click="save">Сохранить</button>
            <span v-for="n in 5">{{checkRating(n, pic)}}</span><br>
            <span class="btn" @click="removefn(index)">Удалить</span>  
        </div>
    `
})
.component('addform',{
    data: function(){
        return {
            pic:{
            }
        }
    },
    props:["addfn","pics"],
    template: `
        <div class="addform">
            <input type="text" v-model="pic.desc" />
            <input type="number" v-model="pic.rate" /><hr>
            <span class="btn"  @click="addfn({desc:pic.desc, rate: pic.rate})">Add</span>
            <span class="btn"  @click="$emit('mysort')"> Sort</span>
            <span class="btn"> Всего задач:{{pics.length}}</span>
        </div>`
})
.mount("#hook")