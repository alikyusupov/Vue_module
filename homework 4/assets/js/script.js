let app = Vue.createApp({
			data: function(){
				return {
                                        services:[
                                                {
                                                        serviceName:"Пошив штор",
                                                        serviceCost: 1250
                                                },
                                                {
                                                        serviceName:"Изготовление лекал",
                                                        serviceCost: 4000
                                                },
                                                {
                                                        serviceName:"Подгон платья по фигуре",
                                                        serviceCost: 950
                                                },
                                                {
                                                        serviceName:"Выезд портного",
                                                        serviceCost: 2200
                                                },
                                        ],
                                        arrCosts:[],
                                        numOfServices:0
				}
                        },
        		mounted(){
  
        		},
        		methods:{
 
        		},
        		computed:{

        		}
})
			
app.mount("#hook");