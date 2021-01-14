      new Vue({
        el: "#game-demo",
        data: {
          cells: Array.apply(null, { length: 100 }).map(function(_, index) {
            return {
              id: index,
              number: index + 1
            };
          }),
          counter: 0,
          correctStartValue:false
        },
        methods: {
          shuffle: function() {
            this.cells = _.shuffle(this.cells);
          },
          restart: function(){
          	this.cells = _.shuffle(this.cells);
          	this.counter = 0;
          	this.correctStartValue = false;
          	const els = document.querySelectorAll(".cell");
          	els.forEach(el=>{
          		el.style.backgroundColor = "";
          	})
          },
          pick: function(e){
          	if (!this.correctStartValue) {
          		if (parseInt(e.target.innerText) === 1) {
          			e.target.style.backgroundColor = "yellow";
          			console.log("Хорошее начало")
          			this.correctStartValue = true;
          			this.counter++
          		}
          		else{
          			console.log("Плохое начало")
          		}
          	}
          	else{
          		if ((parseInt(e.target.innerText) - this.counter) === 1) {
          			e.target.style.backgroundColor = "yellow";
          			this.counter++;
          			if (this.counter === 100) {
          				alert("Победа!")
          			}else{
          				console.log("Продолжайте  в том же духе")
          			}
          		}
          		else{
          			console.log("Неверный ход")
          		}
          	}
          	console.log(this.counter)
          }
        },
        mounted(){
        	this.cells = _.shuffle(this.cells);
        }
      });
