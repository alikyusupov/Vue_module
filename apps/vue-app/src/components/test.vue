<template>
    <nav>
        <span v-show="isGrid" @click="isGrid = !isGrid">GRID</span>
        <span v-show="!isGrid" @click="isGrid = !isGrid">LIST</span>
    </nav>
    <hr>
    <main :class="{gridClass:isGrid}">
        <article v-for="(a,index) in articles" :key="index">
            <div v-show="!isGrid">
                <p>{{a.title}}</p>
            </div>
            <div>
                    <img :data-content="a.body" :src="path" @click="openModal($event)">
            </div>
        </article>

        <section id="modal">
            <span class="closer" @click="closeModal($event)">
                X
            </span>
            <p></p>
        </section>
    </main>
</template>

<script>
export default {
    name:"display",
    data: function(){
            return {
                articles: [],
                path:"/assets/news.jpg",
                isGrid:true
            }
    },
    mounted(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            let data = res.json();
            return data;
        })
        .then(data=>{
            this.articles = data;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        openModal(e){
            let mdl = document.getElementById('modal');
            mdl.children[1].innerText = e.target.getAttribute("data-content");
            mdl.classList.add("active");
        },
        closeModal(e){
            e.target.parentElement.classList.remove("active")
        }
    },
    computed:{
                                
    }
}
</script>

<style scoped>
    *{
	padding: 0;
	box-sizing: border-box;
}

@font-face {
    font-family: 'prettyFont'; /*a name to be used later*/
    src: url("../assets/pretty_font.ttf"); /*URL to font*/
}

p, span{
	font-family: "prettyFont";
	cursor: pointer;
}

nav{
	display: flex;
	justify-content: center;
}

article{
	position: relative;
	display: flex;
	justify-content: space-between;
}

img{
	width: 50px;
}


ul{
	list-style-type: none;
	border: 2px solid grey;
	border-radius: 10px;
	padding: 10px;
}

li{
	display: flex;
	justify-content: space-between;
}

#hook{
	position: relative;
	max-width: 1280px;
	margin: 0 auto;
}

.gridClass{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}

.gridClass img{
	width: 150px;
}


.closer{
	margin-left: 90%;
}

section{
	text-align: center;
	margin-top:25vh;
	margin-right: 25%;
	margin-left: 25%;
	position: fixed;
	transform: translateY(-1200px);
	border: 2px solid black;
	border-radius: 15px;
	background-color: white;
	z-index: 10;
}

section.active{
	transform: translateY(0);
	transition: .5s ease-in;
}

section p {
	padding-left: 10px;
	padding-right: 10px;
}


</style>