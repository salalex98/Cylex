var button = document.getElementById('my_button');
var container = document.getElementById('container');
var contor = 1;

button.addEventListener('click', function(){
	var element = document.createElement("span");
	element.style.backgroundColor = 'red';

	var text = document.createTextNode("click "+contor);
	var par = document.createElement("p");
	contor++;
	element.appendChild(text);
	container.appendChild(element);
	container.appendChild(par);
});

var button1 = document.getElementById('m1');

button1.addEventListener('click',function(){
	if(contor>1){
		contor--;
	}
	container.removeChild(container.lastChild);
	container.removeChild(container.lastChild);
})
