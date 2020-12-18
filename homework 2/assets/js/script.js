let app = Vue.createApp({
				data: function(){
					return {
						article:{
							description: `
							<p>
							Дореволюционный флигель на Воронежской улице в 
							Петербурге снесли, несмотря на решение суда
							</p>`,
							content: `
							<p>
							Проект гостиницы на месте дореволюционного дома (который нельзя
							сносить по закону), представили в ноябре 2019 года. При этом 
							ранее жители были против уплотнительной застройки квартала и заявляли, 
							что им не хватает парков и 
							скверов. Правда, проект территории так и остался неутвержденным, но это не 
							помешало продолжить его разработку.
							</p>`,
							url: './assets/images/news.jpg',

						},
						visible: false,
						selectedIndex:-1
					}

                },
        		mounted(){
        			const liTags = document.querySelectorAll("li");
        			for (let i = 0; i < liTags.length; i++) {
        				liTags[i].addEventListener("click",e=>{
        					this.selectedIndex = i;
        				})
        			}
        		}

            });  

			
let vm = app.mount("#hook");
