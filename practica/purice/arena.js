class Arena {
	constructor(width,height) {
		this.settings ={
			'width':width,
			'height':height,
			'class':{
				'left':'left',
				'top':'top',
				'right':'right',
				'bottom':'bottom',
				'middle':'middle'
			},
			'classes':{
				'container' : 'container',
				'cell': 'cell',
				'row' : 'row'
			}
		}

		this.init();
	}

	init(){
		var container = document.getElementById(this.settings.classes.container);
		this.createArena(container);
	}

	createArena(container) {
		var line = this.createElement({'tagName' : 'div', 'className' : this.settings.classes.row});
		var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.left+' '+this.settings.class.top+' '+this.settings.classes.cell});
		line.appendChild(cell);
		for(var j = 1; j < this.settings.height-1; j++) {
				var cell = this.createElement({'tagName' : 'div', 'className' :  this.settings.class.top+' '+this.settings.classes.cell})
				line.appendChild(cell); 
		}

		var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.right+' '+this.settings.class.top+' '+this.settings.classes.cell});
		line.appendChild(cell);
		container.appendChild(line);

		for(var i = 1; i < this.settings.width-1; i++) {
			var line = this.createElement({'tagName' : 'div', 'className' : this.settings.classes.row});

			var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.left+' '+this.settings.classes.cell});
			line.appendChild(cell); 
			for(var j = 1; j < this.settings.height-1; j++) {
				var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.middle +' '+this.settings.classes.cell})
				line.appendChild(cell); 
			}
			var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.right+' '+this.settings.classes.cell});
			line.appendChild(cell);

			container.appendChild(line);
		}


		var line = this.createElement({'tagName' : 'div', 'className' : this.settings.classes.row});
		var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.left+' '+this.settings.class.bottom+' '+this.settings.classes.cell});
		line.appendChild(cell);
		for(var j = 1; j < this.settings.height-1; j++) {
				var cell = this.createElement({'tagName' : 'div', 'className' :  this.settings.class.bottom+' '+this.settings.classes.cell})
				line.appendChild(cell); 
		}

		var cell = this.createElement({'tagName' : 'div', 'className' : this.settings.class.right+' '+this.settings.class.bottom+' '+this.settings.classes.cell});
		line.appendChild(cell);
		container.appendChild(line);
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


var arena = new Arena(20,20);
