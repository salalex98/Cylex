class Bot{
	constructor(labirint){
		this.labirint = labirint;
		this.settings ={
			start: 'start',
			class_name: 'bot'
		};
		this.position ={
			x:0,
			y:1
		};
		this.direction ={
			x:0,
			y:0
		}

		this.init();
	}

	init(){
		this.initBot();
		this.attachEvents();
		this.moveBot();
	}

	initBot(){
		var bot = this.getCellByPositions(this.position.x,this.position.y);
		bot.classList.add(this.settings.class_name);
	}

	clearBot(){
		var bot = document.getElementsByClassName(this.settings.class_name);
		bot[0].classList.remove(this.settings.class_name);
	}

	verifyMove(){
		var nextX = ;
		var
	}

	moveBot(bot){
		this.clearBot();
		this.position.x+=this.direction.x;
		this.position.y+=this.direction.y;
		this.initBot();
	}

	getCellByPositions(x,y){
		var cell = document.getElementsByClassName(this.labirint.settings.classes.row);
		cell = cell[y].getElementsByClassName(this.labirint.classes.cell)[x];
	}
}