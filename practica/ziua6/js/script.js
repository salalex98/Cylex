class Car {
	constructor() {
      this._nume = "";
      this._colour = "";
      this._brand = "";   
	}
    set nume(n) {
    	if(typeof(n) == 'string')
    	this._nume = n;
    }
    set colour(n) {
    	if(typeof(n) == 'string')
    		this._colour = n;
    }
    set brand(n) {
    	if(typeof(n) == 'object')
    		this._brand = n;
    }



}
class Brand {
   constructor(name) {
   	this._nume = name;
   }

} 

class Brands {
	constructor() {
		this._branduri = [];
	}
	addBrand(b) {
		if(this.cautare(b._nume)== false)
		this._branduri.push(b);

	}
	cautare(nume_brand) {
		for(var i in this._branduri) {
            if(nume_brand == this._branduri[i]._nume)
            	return this._branduri[i];
		}
        return false;
	}
}
class Controller {
	constructor() {
		this._settings = {
			'cont' : 'container' 
		};
		this.init();

	}
	init() {
		this.creeeazaHtml();

	}
	creeeazaElemHtml(info) {
		var elem = document.createElement(info['tagname']);
		if(info['classname'] ) 
			elem.classList.add(info['classname']);
		if(info['text']){
		var text = document.createTextNode(info['text']);
		elem.appendChild(text);
	}
		return elem;
	}
	creeeazaHtml() {
		var el =  this.creeeazaElemHtml({'tagname':'input'
	 ,'classname': 'input1'})
		var div = document.getElementById(this._settings.cont);
		div.appendChild(el);
		var button =this.creeeazaElemHtml({'tagname':'button', 'classname':'button1','text':'Apasa ma' });
		var button1 =this.creeeazaElemHtml({'tagname':'button', 'classname':'button1','text':'Apasa ma nu' });
		
		div.appendChild(button);
		div.appendChild(button1);
	}
  
}

/*var car1 = new Car();
var lista_branduri = new Brands;

lista_branduri.addBrand(new Brand("Dacia"));
lista_branduri.addBrand(new Brand("Dacia"));
lista_branduri.addBrand(new Brand("Fiat"));
lista_branduri.addBrand(new Brand("Porsche"));
console.log(lista_branduri);
*/
var C1 = new Controller();
