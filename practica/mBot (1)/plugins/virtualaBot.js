class VirtualBot {
	moveRight(bot){
		bot.direction.x=1;
		bot.direction.y=0;
		bot.front='right';
	}

	moveLeft(bot){
		bot.direction.x=-1;
		bot.direction.y=0;
		bot.front='left';
	}

	moveUp(bot){
		bot.direction.x=0;
		bot.direction.y=-1;
		bot.front='up';
	}

	moveDown(bot){
		bot.direction.x=0;
		bot.direction.y=1;
		bot.front='down';
	}
}