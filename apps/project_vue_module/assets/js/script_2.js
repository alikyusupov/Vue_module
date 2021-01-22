Vue.createApp({
            data: function(){
                return {
                    slides:[
                            "Конфуций говорил:'Да не говорил я такого!'",
                            "Секрет богатства - ходить в магазин со своим пакетом",
                            "Денег нет, но Вы держитесь!"
                            ],
                    delay:3000
                    } 
                },
            mounted(){

                    },
            methods:{

                    },
            computed:{
                       
                    }
})
.component("carousel",{
        props:{
            slides:{
                type: Array
            },
            delay:{
                type: Number,
                default:2500
            }
        },
        template:`
            <div id="slideHolder">
                <p v-for="slide in slides" class="slide">
                    {{slide}}
                </p>
            </div>` ,
        mounted(){
            const pElems = document.getElementsByTagName('p');
            let ticker = -1;
               setInterval(()=>{
                    if(ticker == pElems.length-1)
                        ticker = 0
                    else
                        ticker++;
                    pElems[ticker].classList.add("active");
                    //Имитация метода siblings() из jQuery
                    for (let sibling of pElems[ticker].parentNode.children) {
                        if (sibling !== pElems[ticker]) sibling.classList.remove('active');
                    }


               },this.delay)
        }
})
.mount("#hook")