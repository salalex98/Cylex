class Labirint {
	constructor() {
		this.settings = {
			labirint : [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
				[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
				[1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
				[1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
				[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
				[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
				[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
				[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
				[1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
				[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			],
			matrix_class: [
				'free',
				'wall',
				'start',
				'end'
			],
			classes: {
				'container' : 'container',
				'cell': 'cell',
				'row' : 'row'
			}
		};

		this.init();
	}

	init() {
		var container = document.getElementById(this.settings.classes.container);
		this.createlabirint(container);
	}

	createlabirint(container) {
		for(var i = 0; i < this.settings.labirint.length; i++) {
			var line = this.createElement({'tagName' : 'div', 'className' : this.settings.classes.row});

			for(var j = 0; j < this.settings.labirint[i].length; j++) {
				var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.matrix_class[this.settings.labirint[i][j]] + ' ' + this.settings.classes.cell})
				line.appendChild(cell); 
			}

			container.appendChild(line);
		}	
	}

	createElement(info) {
		var elem = document.createElement(info['tagName']);
		if(info['className'] ) {
			var classes = info['className'].split(" ");
			for(var cl in classes) {			
				elem.classList.add(classes[cl]);
			}
		}
		if(info['text']){
			var text = document.createTextNode(info['text']);
			elem.appendChild(text);
		}

		if(info['attr']) {
			for(var attr in info['attr']) {
				elem.setAttribute(attr, info['attr'][attr]);
			}
		}

		return elem;
	}
}