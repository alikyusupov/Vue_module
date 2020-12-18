let app = Vue.createApp({
				data: function(){
					return {
						product:{
							title: 'Cowon x9',
							description: '<em>Лучший выбор для любителей музыки</em>',
							price: 14290,
							model: "x9",
							color: "White",
							url: './assets/images/player_1.jpg'                        
						} 
					}					
                }
            });  

			app.config.globalProperties.$filters = {
				addCurrency: function(val){
					return val + " руб."
				}
			};
			
			let vm = app.mount("#hook");

let app_ = Vue.createApp({
				data: function(){
					return {
						user:{
							name: 'Alik',
							date: 33,
							hobbies: ["web","sewing"],
							url: "./assets/images/avatar.png",
							lastUpdated: '2 days ago'                        
						} 
					}					
                }
            });  

			
			let vm_ = app_.mount("#hook_");