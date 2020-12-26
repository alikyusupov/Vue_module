let app = Vue.createApp({
                        data: function(){
                                return {
                                    articles: [],
                                    path:"assets/images/news.jpg",
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
})
                        
app.mount("#hook");