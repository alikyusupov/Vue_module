
const machines = [
				{	
					id:"abc1",
					name:"Jack A4",
					url:"https://im0-tub-ru.yandex.net/i?id=99318378c6525b489e98a1bc5da447b6&n=13",
					desc:"Прекрасный выбор для новичков",
					descBig:"Машина оборудована двухниточным челночным стежком со встроенным сервомотором и автоматическими функциями: обрезка нити, закрепка, подъема лапки, нитеотводчик, позиционером иглы. Все функции имеют голосовое подтверждение при нажатии кнопки выбора на пульте управления. Безопасная система эксплуатации. Все разъемы и штекеры блока управления расположены на задней части машины и защищены крышкой. В корпус машины встроен USB порт, предназначенный для обновления программного обеспечения.",
					price:40000,
					tag:"machine"

				},
				{
					id:"abc2",
					name:"Juki 8700",
					url:"https://i.etsystatic.com/15311119/r/il/11f276/1654731941/il_794xN.1654731941_h7fx.jpg",
					desc:"Настоящая рабочая лошадка",
					descBig:"Машина оборудована двухниточным челночным стежком со встроенным сервомотором и автоматическими функциями: обрезка нити, закрепка, подъема лапки, нитеотводчик, позиционером иглы. Все функции имеют голосовое подтверждение при нажатии кнопки выбора на пульте управления. Безопасная система эксплуатации. Все разъемы и штекеры блока управления расположены на задней части машины и защищены крышкой. В корпус машины встроен USB порт, предназначенный для обновления программного обеспечения.",
					price:20000,
					tag:"machine"
				},
				{	
					id:"abc3",
					name:"Typical 6106",
					url:"https://im0-tub-ru.yandex.net/i?id=218235395c7a3f59e0cf9916378cecd9&n=13",
					desc:"Оптимальный вариант для малого бизнеса",
					descBig:"Машина оборудована двухниточным челночным стежком со встроенным сервомотором и автоматическими функциями: обрезка нити, закрепка, подъема лапки, нитеотводчик, позиционером иглы. Все функции имеют голосовое подтверждение при нажатии кнопки выбора на пульте управления. Безопасная система эксплуатации. Все разъемы и штекеры блока управления расположены на задней части машины и защищены крышкой. В корпус машины встроен USB порт, предназначенный для обновления программного обеспечения.",
					price:30000,
					tag:"machine"
				}
			]

const app = Vue.createApp({});

const Home = {
	template:`
		<h3 class="centered">Выберите раздел</h3>
	`
}

const Items = {
	data(){
		return {
			machines:machines
		}
	},
	template:`
		<template v-for="machine in machines">
			<router-link :to="{path:'/machines/' + machine.id}">
				<p class="centered">{{machine.name}}</p>
			</router-link>
		</template>
	`
}

const Item = {
	data:function(){
		return {
			selectedItem: machines.filter(m => m.id === this.$route.params.id)[0]
		}
	},
	template:`
		<h3 class="centered">{{selectedItem.name}}</h3>
		<section style="max-width:1280px;margin:0 auto;" class="centered">
			<img :src="''+ selectedItem.url" style="max-width:400px">
			<p>{{selectedItem.descBig}}</p>
			<p>Цена - {{selectedItem.price}} руб.</p>
			<span> Тэг - {{selectedItem.tag}}</span>
		</section>


	`
}

const routes = [
		{
      		path: '/', component: Home
      	},
      	{ 
      		path: '/machines', component: Items
      	},
      	{ 
      		path: '/machines/:id', component: Item
      	},
 ];
    // создаем объект маршрутизатора
const router = VueRouter.createRouter({
     history: VueRouter.createWebHistory(),
     routes: routes
});
     
app.use(router);

app.mount("#hook")