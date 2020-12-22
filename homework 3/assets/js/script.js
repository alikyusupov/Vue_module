let app = Vue.createApp({
				data: function(){
					return {
						query: '',
			            phones: [],
			            path:"assets/images/news.jpg"
					}
                },
        		mounted(){
        			fetch("https://jsonplaceholder.typicode.com/posts")
        			.then(res=>{
        				let data = res.json();
        				return data;
        			})
        			.then(data=>{
        				this.phones = data;
        			})
        			.catch(err=>{
        				console.log(err)
        			})
        		},
        		methods:{
        			showBody(e){
        				let elem = e.target.parentElement.parentElement.nextElementSibling;//e.target.closest не помог почему то
        				elem.classList.toggle("hide");
        				if (elem.classList.contains("hide"))
        					e.target.textContent = "Подробнее";
        				else
        					e.target.textContent = "Скрыть";
        			}
        		},
        		computed:{
        			filteredList: function(){
		                let tar = this.query;
		                return this.phones.filter(elem=> {
		                    return elem.title.indexOf(tar) > -1;
		                })
		            }
        		}
})
			
app.mount("#hook");


let app_ = Vue.createApp({
				data: function(){
					return {
						edit:false,
						txt:"Новый штамм коронавируса, Рождество, брексит. Что происходит в Великобритании - объясняем за 2 минуты"
					}
                },
        		mounted(){

        		},
        		methods:{
        			editFn(e){
        				this.edit = true;
        				e.target.nextElementSibling.value = e.target.innerText;
        			},
        			saveFn(e){
        				this.txt = e.target.value;
        				this.edit = false;
        			}

        		},
        		computed:{

        		}
})

app_.mount("#hook_");