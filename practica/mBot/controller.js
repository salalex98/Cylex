class Controller {
	constructor() {
		this.init();
	}

	init() {
		this.labirint = new Labirint();
		this.mBot = new Bot(this.labirint);
	}
}

var button1 = document.getElementById('start_button');
button1.addEventListener('click',function(){
	new Controller();
});