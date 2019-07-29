class Car{
	constructor(name){
		this._name=name;
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name=name;
	}

	present(){
		return 'I have a '+this._name;
	}
}

class Model extends Car{
	constructor(name,model){
		super(name);
		this._model=model;
		this._number=1;
	}

	get model(){
		return this._model;
	}

	set model(model){
		this._model=model;
	}

	get number(){
		return this._number;
	}

	set number(number){
		this._number=number;
	}

	present(){
			return this._number+' '+this._name+' '+this._model;
	}

	equals(car){
		if(this._model==car.model && this._name==car.name){
			return true;
		}else{
			return false;
		}
	}
}

var button1 = document.getElementById('b1');
var ulist=document.getElementById("ulist");
// var button2 = document.getElementById('b2');
var list = [new Model('Opel','Astra'),new Model('Renault','Clio'),new Model('Volkswagen','Golf'),new Model('BMW','Seria 3'),new Model('Hyundai','i20'),new Model('Toyota','Yaris'),new Model('Dacia','Duster'),new Model('Ford','Focus')];



for(let i in list){
	var node = document.createElement("LI");
 	var textnode=document.createTextNode(list[i].present());
 	node.appendChild(textnode);
 	document.getElementById("ulist").appendChild(node);
}



button1.addEventListener('click',function(){
	var name = document.getElementById('name').value;
	var model = document.getElementById('model').value;
	var node = document.createElement("LI");
	var car = new Model(name,model);
	var ok=0;
	for(let i in list){
		if(list[i].equals(car)){
			list[i].number++;
			ok=1;
 			var textnode=document.createTextNode(list[i].present());
 			node.appendChild(textnode);
			ulist.replaceChild(node,ulist.childNodes[i]);
		}
	}
	if(ok==0){
		list.push(car);
 		var textnode=document.createTextNode(car.present());
 		node.appendChild(textnode);
 		ulist.appendChild(node);
	}
});

 // button2.addEventListener('click',function(){
	// for(let i in list){
	// 	var node = document.createElement("LI");
 // 		var textnode=document.createTextNode(list[i].present());
 // 		node.appendChild(textnode);
 // 		document.getElementById("ulist").appendChild(node);
	// }
 // });