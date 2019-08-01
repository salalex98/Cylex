class Ball{
	constructor(board){
		this.canvas = document.getElementById("myCanvas");	
		this.ctx = this.canvas.getContext("2d");

		this.board = board;

		this.position={
			'x':this.canvas.width/2,
			'y':this.canvas.height-5
		}
		this.direction={
			'x':1,
			'y':-1
		}
		this.radius = 1;
	}

	drawBall(){
	    this.ctx.beginPath();
	    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fill();
	    this.ctx.closePath();
	}

	draw() {

	    if(this.position.x + this.direction.x > this.canvas.width || this.position.x + this.direction.x < 0) {
		    this.direction.x = -this.direction.x;
		}

	    if(this.position.y + this.direction.y < this.radius) {
		    this.direction.y = -this.direction.y;
		}else if(this.position.y + this.direction.y >this.canvas.height-this.board.paddle.height){
			if(this.position.x>=this.board.paddleX && this.position.x<=this.board.paddleX + this.board.paddle.width){
				this.direction.y = -this.direction.y;
				console.log('hit');
			}else
			{
				console.log(this.position.x+'-'+this.position.y+'|'+this.board.paddleX)
				alert('Game Over');
		    	document.location.reload();
		    	return false;
			}
		}

	    this.drawBall();

	    this.position.x += this.direction.x;
	    this.position.y += this.direction.y;
	}
}

var minge=new Ball(ecran);