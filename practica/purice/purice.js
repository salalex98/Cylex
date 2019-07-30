class Bug {
	constructor(arena) {
		this.arena = arena;
		this.settings = {
			'bug':'bug',
			'dead':'dead'
		}
		this.limit = this.arena.settings.width * this.arena.settings.height;
		this.next ={
			'x':0,
			'y':0
		}
		this.position = {
			'x':0,
			'y':0
		}
		this.init();
	}

	init(){
		this.placeBug();
		this.run();
	}

	run(){
		var self = this;
		var time = 200;
		this.randomPlace();
		if(this.limit>0){
			setTimeout(function() {
		 			self.run();	
			 	}, time);
		}
	}


	placeBug(){
		var bug = this.getCellByPositions(this.position.x, this.position.y);
		if(!bug.classList.contains(this.settings.bug) || !bug.classList.contains(this.settings.dead)){
			bug.classList.add(this.settings.bug);
			// var self = this;
			// bug.addEventListener('click', function(){	
			// 	this.classList.add(self.settings.dead);
			// }, true);
			this.limit--;
		}
	}

	canPlace(){
		var bug = this.getCellByPositions(this.next.x, this.next.y);
		if(bug.classList.contains(this.settings.bug) || bug.classList.contains(this.settings.dead)){
			return false;
		}else{
			console.log(this.next.x+'-'+this.next.y);
			this.position.x = this.next.x;
			this.position.y = this.next.y;
			console.log(this.position.x+'-'+this.position.y);
			return true;
		}
	}

	randomPlace(){
		do{
			this.next.x = Math.floor(Math.random() * this.arena.settings.width);
			this.next.y = Math.floor(Math.random() * this.arena.settings.height);
			console.log(this.canPlace());	
		}while(!this.canPlace());
		this.placeBug();
		this.clearBug();
	}

	clearBug() {
		var self = this;
		var bug = document.getElementsByClassName(this.settings.bug);
		bug[0].classList.remove(this.settings.bug);	
		// bug[0].removeEventListener('click', function(){
		// 		this.classList.add(self.settings.dead);
		// 	}, true);
		this.limit++;
	}

	getCellByPositions(x, y) {
		var cell = document.getElementsByClassName(this.arena.settings.classes.row);
		cell = cell[y].getElementsByClassName(this.arena.settings.classes.cell)[x];
		
		if(cell) {
			return cell;
		}

		return false;
	}
}

var purice = new Bug(arena);