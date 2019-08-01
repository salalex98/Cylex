class Controller{
	constructor(ball){
		this.canvas = document.getElementById("myCanvas");	
		this.ctx = this.canvas.getContext("2d");
		this.ball=ball;
		this.interval = 0;
		this.ok=true;
		this.init();
	}

	init(){
		this.run()
	}

	run(){
		var self=this;
		this.interval = setInterval(function(){self.draw()}, 10);
	}

	draw(){
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		if(this.ball.draw()==false){
			clearInterval(this.interval);
		}
		this.ball.board.drawPaddle();
	}
}

var controller = new Controller(minge);;