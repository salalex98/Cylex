class Bot {
	constructor(labirint) {
		this.labirint = labirint;
		this.settings = {
			start_position : 'start',
			class_name: 'bot',
			visited: 'visited'
		};
		this.front = 'right';
		this.revert = 0;
		this.position = {
			x: 1, 
			y: 1
		};
		this.direction = {
			x: 1,
			y: 0
		};
		this.plugin = new VirtualBot();
		this.init();
	}

	init() {
		this.initBot();
		this.attacheEvemts();
		this.run();
	}

	run() {
		var self = this;
		if(this.checkMoves()>=1){
			this.priorityMove();
		}else{
			this.moveBot();
		}

		if(!this.isFin_c()){
			setTimeout(function() {
				self.run();	
			}, 100);
		}else{
			console.log("finnished");
		}
	}

	clearBot() {
		var bot = document.getElementsByClassName(this.settings.class_name);
		bot[0].classList.remove(this.settings.class_name);	
	}
	initBot() {
		var bot = this.getCellByPositions(this.position.x, this.position.y);
		if(!bot.classList.contains(this.settings.visited)){
			bot.classList.add(this.settings.visited);
			bot.classList.add(this.front);
		}
		bot.classList.add(this.settings.class_name);
	}
	verifyMove() {
		var nextX = this.position.x + this.direction.x;
		var nextY = this.position.y + this.direction.y;
		var cell = this.getCellByPositions(nextX,nextY);
		if (cell.classList.contains('wall')) {
			return true;
		}
		return false;
	}
	visitedMove(){
		var nextX = this.position.x + this.direction.x;
		var nextY = this.position.y + this.direction.y;
		var cell = this.getCellByPositions(nextX,nextY);
		if (cell.classList.contains('wall') || cell.classList.contains(this.settings.visited)) {
			return true;
		}
		return false;
	}
	checkMoves(){
		var cells = [];
		var moves = 4;
		cells.push(this.getCellByPositions(this.position.x+1,this.position.y));
		cells.push(this.getCellByPositions(this.position.x-1,this.position.y));
		cells.push(this.getCellByPositions(this.position.x,this.position.y+1));
		cells.push(this.getCellByPositions(this.position.x,this.position.y-1));
		for(var cell in cells){
			if (cells[cell].classList.contains(this.settings.visited) || cells[cell].classList.contains('wall')) {
				moves--;
			}
		}
		return moves;
	}
	isFin_c(){
		var cell = this.getCellByPositions(this.position.x,this.position.y);
		if (cell.classList.contains('end')) {
			return true;
		}
		return false;
	}
	turnLeft(){
		switch(this.front){
			case 'right':
				this.moveUp();
				break;
			case 'down':
				this.moveRight();
				break;
			case 'left':
				this.moveDown();
				break;
			default:
				this.moveLeft();
		}
	}

	turnRight(){
		switch(this.front){
			case 'right':
				this.moveDown();
				break;
			case 'down':
				this.moveLeft();
				break;
			case 'left':
				this.moveUp();
				break;
			default:
				this.moveRight();
		}
	}

	moveRight(){
		this.plugin.moveRight(this);
	}

	moveLeft(){
		this.plugin.moveLeft(this);
	}

	moveUp(){
		this.plugin.moveUp(this);
	}

	moveDown(){
		this.plugin.moveDown(this);
	}

	moveBot(){
		this.turnRight();
		if(!this.verifyMove()) {
			// console.log('am intors dreapta');
 			this.position.x += this.direction.x;
			this.position.y += this.direction.y;
			this.clearBot();
			this.initBot();
		}else{
			this.turnLeft();
			if(!this.verifyMove()) {
				// console.log('am mers inainte');
	 			this.position.x += this.direction.x;
				this.position.y += this.direction.y;
				this.clearBot();
				this.initBot();
			}else{
				this.turnLeft();
				if(!this.verifyMove()) {
					// console.log('am intors in stanga');
		 			this.position.x += this.direction.x;
					this.position.y += this.direction.y;
					this.clearBot();
					this.initBot();
				}else{
					this.turnLeft();
					// console.log('am intors inapoi');
		 			this.position.x += this.direction.x;
					this.position.y += this.direction.y;
					this.clearBot();
					this.initBot();
				}
			}
		}
	}

	priorityMove(){
		this.turnRight();
		if(!this.visitedMove()) {
			// console.log('am intors dreapta');
 			this.position.x += this.direction.x;
			this.position.y += this.direction.y;
			this.clearBot();
			this.initBot();
		}else{
			this.turnLeft();
			if(!this.visitedMove()) {
				// console.log('am mers inainte');
	 			this.position.x += this.direction.x;
				this.position.y += this.direction.y;
				this.clearBot();
				this.initBot();
			}else{
				this.turnLeft();
				if(!this.visitedMove()) {
					// console.log('am intors in stanga');
		 			this.position.x += this.direction.x;
					this.position.y += this.direction.y;
					this.clearBot();
					this.initBot();
				}else{
					this.turnLeft();
					// console.log('am intors inapoi');
		 			this.position.x += this.direction.x;
					this.position.y += this.direction.y;
					this.clearBot();
					this.initBot();
				}
			}
		}
	}

	getCellByPositions(x, y) {
		var cell = document.getElementsByClassName(this.labirint.settings.classes.row);
		cell = cell[y].getElementsByClassName(this.labirint.settings.classes.cell)[x];
		
		if(cell) {
			return cell;
		}

		return false;
	}

	attacheEvemts() {

	}
}
