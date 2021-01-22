Vue.createApp({})
.component('player',{
    data(){
        return {
            sounds:[{
                path:"./assets/media/arfa.mp3",
                name:"Арфа"
            },{
                path:"./assets/media/drums.mp3",
                name:"Дробь"
            },{
                path:"./assets/media/bandjo.mp3",
                name:"Банджо"
            }],
            file:null,
            startAt:0,
            playing:true,
            curr:""
        }
    },
    methods:{
        playPause(){
            if(this.playing){
                if(!this.file){
                    this.file = new Audio();
                    this.file.src = this.sounds[this.startAt].path;
                    this.curr = this.sounds[this.startAt].name;
                }
            this.file.play();
            this.playing = false;      
            }
            else{
                this.file.pause();
                this.playing = true;
            }
            this.file.addEventListener("ended",this.goForward)
        },
        goBack(){
            this.playing = false;
            this.startAt--;
            if (this.startAt < 0)
                this.startAt = this.sounds.length - 1;
            if (this.file) {
                this.file.pause();
                this.file.currentTime = 0.0;
            }
            this.file = new Audio();
            this.file.src = this.sounds[this.startAt].path;
            this.curr = this.sounds[this.startAt].name;
            this.file.play()
            this.file.addEventListener("ended",this.goForward)
        },
        goForward(){
            this.playing = false;
            this.startAt++;
            if (this.startAt > this.sounds.length - 1)
                this.startAt = 0;
            if (this.file) {
                this.file.pause();
                this.file.currentTime = 0.0;
            }
            this.file = new Audio();
            this.file.src = this.sounds[this.startAt].path;
            this.curr = this.sounds[this.startAt].name;
            this.file.play()
            this.file.addEventListener("ended",this.goForward)
        },
        playOnClickHandler(idx){
            this.playing = false;
            if (this.file) {
                this.file.pause();
                this.file.currentTime = 0.0;
            }
            this.file = new Audio();
            this.file.src = this.sounds[idx].path;
            this.curr = this.sounds[idx].name;
            this.file.play();
            this.file.addEventListener("ended",this.goForward)   
        }
    },
    template:`
        <div id="playerHolder">
            <section id="controllers">
                <img @click="goBack" src="./assets/media/prev.png">
                <img v-show="playing" @click="playPause" src="./assets/media/play.png">
                <img v-show="!playing" @click="playPause" src="./assets/media/pause.png">
                <img @click="goForward" src="./assets/media/next.png">
            </section>
            <section id="playlist">
                <ul>
                    <li v-for="(sound,index) in sounds">
                        <span @click="playOnClickHandler(index)">{{sound.name}}</span>
                    </li>
                </ul>
            </section>
        </div>
        <p style="text-align:center">{{curr}}</p>
    `
})
.mount("#hook")