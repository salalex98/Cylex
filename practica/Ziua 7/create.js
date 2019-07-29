class Controller{
	constructor(){
		this._settings = {
			cont: 'container'
		};

		this.init();
	}

	init(){
		this.createContent();
	}

	createContent(){
		var input = this.createHtmlElement({
			tag_name: 'input',
			class_name: 'text',
			attributes: {
				id: 'id-test'
			}

		});
		var button = this.createHtmlElement({
			tag_name: 'button',
			class_name: 'save',
			text: 'Salveaza',
			attributes: {
				id: 'id-test'
			}
		});
		var container = document.getElementById(this._settings.cont);

		container.appendChild(input);
		container.appendChild(button);
	}

	createHtmlElement(info){
		if(!info.tag_name)
			return false;

		var element = document.createElement(info.tag_name);

		if(info.class_name){
			element.classList.add(info.class_name);
		}

		if(info.text){
			var text = document.createTextNode(info.text);
			element.appendChild(text);
		}

		if(info.attributes){
			for(var attribute in info.attributes){
				element.setAttribute(attribute,info.attributes[attribute]);
			}
		}

		return element;
	}
}

new Controller();