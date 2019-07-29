class VirtualBot {
	moveRight(){
		this.controller.direction.x=1;
		this.controller.direction.y=0;
		this.controller.front='right';
	}

	moveLeft(){
		this.controller.direction.x=-1;
		this.controller.direction.y=0;
		this.controller.front='left';
	}

	moveUp(){
		this.controller.direction.x=0;
		this.controller.direction.y=-1;
		this.controller.front='up';
	}

	moveDown(){
		this.controller.direction.x=0;
		this.controller.direction.y=1;
		this.controller.front='down';
	}

	clearBot() {
		var bot = document.getElementsByClassName(this.controller.settings.class_name);
		bot[0].classList.remove(this.controller.settings.class_name);	
	}

	initBot() {
		var bot = this.getCellByPositions(this.controller.position.x, this.controller.position.y);
		if(!bot.classList.contains(this.settings.visited)){
			bot.classList.add(this.settings.visited);
			bot.classList.add(this.front);
		}
		bot.classList.add(this.settings.class_name);
	}
}