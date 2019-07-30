function kill(){
	console.log('killed');
	this.classList.add(purice.settings.dead);
	var self = this;
	purice.score+=purice.speed*10;
	purice.speed++;
	document.getElementById("tabela").innerHTML = "Scorul este: "+purice.score+" si viteza este: "+(1010-purice.speed*10)+"ms";
	setTimeout(function() {
		self.classList.remove(purice.settings.dead);
		}, 10000);
	purice.limit--;
	this.removeEventListener('click', kill,true)
}

class Bug {
	constructor(arena) {
		this.arena = arena;
		this.settings = {
			'bug':'bug',
			'dead':'dead'
		}
		this.limit = this.arena.settings.width * this.arena.settings.height;
		this.next ={
			'x':Math.floor(Math.random() * this.arena.settings.width),
			'y':Math.floor(Math.random() * this.arena.settings.height)
		}
		this.position = {
			'x':0,
			'y':0
		}
		this.speed = 1;
		this.score =0;
		this.bug = this.randomPlace();
		this.init();
	}

	init(){
		var time = 1010 - this.speed*10;
		var self = this;
		var bug = this.randomPlace();
		this.clearBug(this.bug);
		this.bug = bug;
		if(this.limit>0){
			setTimeout(function() {
		 			self.init();	
			 	}, time);
		}else{
			console.log('stop');
		}
	}


	placeBug(){
		var bug = this.getCellByPositions(this.position.x, this.position.y);
		if(!bug.classList.contains(this.settings.bug) || !bug.classList.contains(this.settings.dead)){
			bug.classList.add(this.settings.bug);
			var self = this;
			bug.addEventListener('click', kill, true);
			this.limit--;
			return bug;
		}
	}

	canPlace(){
		var bug = this.getCellByPositions(this.next.x, this.next.y);
		if(bug.classList.contains(this.settings.bug) || bug.classList.contains(this.settings.dead)){
			return false;
		}else{
			this.position.x = this.next.x;
			this.position.y = this.next.y;
			return true;
		}
	}

	randomPlace(){
		do{
			this.next.x = Math.floor(Math.random() * this.arena.settings.width);
			this.next.y = Math.floor(Math.random() * this.arena.settings.height);
		}while(!this.canPlace());
		return this.placeBug();
	}

	clearBug(bug) {
		var self = this;
		bug.classList.remove(this.settings.bug);	
		bug.removeEventListener('click', kill, true);
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