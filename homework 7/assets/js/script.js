const Home = {
	template:`<h2 class='centered'>Home</h2>`
}

const Products = {
	template:`<h2  class='centered'>Products</h2>`
}

const Contacts = {
	template:`<h2 class='centered'>Contacts</h2>`
}

const NotFound = {
	template:`<h2 class='centered'>Error in URL</h2>`
}

const routes = [
	{
		path:"/",
		component:Home
	},
	{
		path:"/products",
		component:Products
	},
	{
		path:"/contacts",
		component:Contacts
	},
	{
		path:"/:pathMatch(.*)*",
		component:NotFound
	}
]

const router =  VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes:routes
})

const app = Vue.createApp({});

app.use(router);
app.mount("#hook")