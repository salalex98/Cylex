class Bot {
	constructor(labirint) {
		this.labirint = labirint;
		this.settings = {
			start_position : 'start',
			class_name: 'bot',
			visited_class_name: 'visited'
		};
		this.bug = {};
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

		this.init();
	}

	init() {
		this.initBot();
		this.attacheEvemts();
		this.run();
	}

	run() {
		var self = this;
		this.moveBot();

		setTimeout(function() {
			self.run();	
		}, 50);
	}

	clearBot() {
		var bot = document.getElementsByClassName(this.settings.class_name);
		bot[0].classList.remove(this.settings.class_name);	
	}

	initBot() {
		var dir = false;
		var bot = this.getCellByPositions(this.position.x, this.position.y);
		if(!bot.classList.contains(this.settings.visited_class_name)) {
			bot.classList.add(this.settings.visited_class_name);
		} else {
			var dir = this.checkAnotherVariant(bot);
		}

		if(bot.classList.contains('end')) {
			alert(1);
		}

		bot.classList.add(this.settings.class_name);

		if(dir) {

			this.bug[dir] = this.bug[dir] ? this.bug[dir]+1 : 1;

			console.log(this.bug);
			if(!this.findBug()) {
				this['move' + dir]();
			} else {
				this.bug = {};
			}
		}
	}

	countProperties (obj) {
	    var count = 0;

	    for (var property in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, property)) {
	            count++;
	        }
	    }

	    return count;
	}

	findBug() {
		if(this.countProperties(this.bug) == 2) {
			var ret = 0;
			for(var i in this.bug) {
				if(this.bug[i] > 2) {
					ret++;
				}
			}

			if(ret == 2) {
				return true;
			} 
			return false;
		}
		else {
			for(var i in this.bug) {
				if(this.bug[i] > 2) {
					return true;
				}
			}			
		}

		return false;
	}

	checkAnotherVariant(bot) {
		var switch_direction = {
			'up' : 'Down',
			'down' : 'Up',
			'left' : 'Right',
			'right' : 'Left',
		};

		return switch_direction[bot.classList[2]];

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
		this.direction.x=1;
		this.direction.y=0;
		this.front='right';
	}

	moveLeft(){
		this.direction.x=-1;
		this.direction.y=0;
		this.front='left';
	}

	moveUp(){
		this.direction.x=0;
		this.direction.y=-1;
		this.front='up';
	}

	moveDown(){
		this.direction.x=0;
		this.direction.y=1;
		this.front='down';
	}

	moveBot(){
		this.turnRight();
		if(!this.verifyMove()) {
 			this.position.x += this.direction.x;
			this.position.y += this.direction.y;
			this.clearBot();
			this.initBot();
		}else{
			this.turnLeft();
			if(!this.verifyMove()) {
	 			this.position.x += this.direction.x;
				this.position.y += this.direction.y;
				this.clearBot();
				this.initBot();
			}else{
				this.turnLeft();
				if(!this.verifyMove()) {
		 			this.position.x += this.direction.x;
					this.position.y += this.direction.y;
					this.clearBot();
					this.initBot();
				}else{
					this.turnLeft();
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
