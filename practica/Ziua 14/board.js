var left = false;
var right = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        right = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        left = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        right = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        left = false;
    }
}

class Board{
	constructor(){
		this.canvas = document.getElementById("myCanvas");	
		this.ctx = this.canvas.getContext("2d");

		this.paddle ={
			'height':5,
			'width':50}
		this.paddleX =(this.canvas.width-this.paddle.width)/2

	}

	drawPaddle(){
		this.ctx.beginPath();
	    this.ctx.rect(this.paddleX, this.canvas.height-this.paddle.height, this.paddle.width, this.paddle.height);
	    this.ctx.fillStyle = "#0095DD";
	    this.ctx.fill();
	    this.ctx.closePath();
	    if(right && this.paddleX < this.canvas.width-this.paddle.width) {
	        this.paddleX += 5;
	    }
	    else if(left && this.paddleX > 0) {
	    	this.paddleX -= 5;
	    }
	}
}

var ecran = new Board();