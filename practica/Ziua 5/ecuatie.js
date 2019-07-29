var v='1xxxx-4=2';
console.log(v);

class element{
	constructor(value){
		var power=0;
		for(let i in value){
			if(value[i]=='x'){
				power++;
			}
		}
		if(power>=1){
			this._value=Number(value.match(/\d+/)[0]);
		}else{
			this._value=Number(value);
		}
		this._power=power;
	}

	set power(value){
		this._power=value;
	}

	get power(){
		return this._power;
	}

	set value(value){
		this._value=value;
	}

	get value(){
		return this._value;
	}
}
function normalizare(x,grad){
	var sum;
	for(let i=0;i<=grad;i++){
		sum=0;
		for(let j in x){
			if(x[j].power==i){
					sum+=x[j].value;
	 			x.splice(j,1);
			}
		}
		if(sum!=0){
	 		aux=new element(sum);
	 		aux.power=i;
	 		x.unshift(aux);
		}
	}
	return x;
}

v=v.split('=');
res=Number(v[1]);
var separators = [' ', '\\\+','-', '\\\(', '\\\)', '\\\?'];
var tokens = v[0].split(new RegExp(separators.join('|'), 'g'));
x= [];

if(tokens[0]==' '){
	tokens.shift();
}
if(v[0][0]!='-'){
	var symbols=['+'];
}else{
	var symbols=[];
}

for(let i in v[0]){
	if(v[0][i]=='+' || v[0][i]=='-'){
		symbols.push(v[0][i]);
	}
}

for(let i=0;i<=tokens.length-1;i++){

	let value=tokens[i].match(/\d+/)[0];
	value=symbols[i]+value;
	temp = new element(tokens[i]);
	temp.value=Number(value);
	x.push(temp);
}


grad=0;
for(let i in x){
	if(x[i].power>grad){
		grad=x[i].power;
	}
}



x=normalizare(x,grad);

console.log("Ecuatia este de gradul:",grad);

if(grad==2){
	var a=x[0].value;
	if(x[1].power==1){
		var b=x[1].value;
		var c=x[2].value;
	}else if(x[1].power==0){
		var b=0;
		var c=x[1].value;
	}else{
		var b=0;
		var c=0;
	}
	var delta=Math.sqrt(b*b-4*a*c);
	var x1=(0-b+delta)/(2*a);
	var x2=(0-b-delta)/(2*a);
	if(x1==x2){
		console.log("x1 = x2 =",x1)
	}else{
		console.log("x1 =",x1,"| x2 =",x2);
	}
	if(x1*x1*a+x1*b+c==res && x2*x2*a+x2*b+c==res){
		console.log("Raspunsurile sunt correcte");
	}else{
		console.log("Raspunsurile nu sunt correcte");
	}
}else if(grad==1){
	var a=x[0].value;
	if(x[1].power==0){
		var b=x[1].value;
	}
	temp=res-b;
	var x1=temp/a;
	console.log("x este: ",x1);
	if(x1*a+b==res){
		console.log("Rezultatul e correct");
	}else{
		console.log("Rezultatul e gresit");
	}
}else if(grad==0){
	console.log("Nu este o ecuatie");
	if(x[0].value!=res){
		console.log("Si afirmatia este gresita oricum");
	}
}else{
	console.log("Ecuatie nu este de grad rezolvabil");
}