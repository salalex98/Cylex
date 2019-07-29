function rotireSD(x,k){
	while(k>0){
		temp=x.pop();
		x.unshift(temp);
		k--;
	}
	return x;
}

function rotireDS(x,k){
	while(k>0){
		temp=x.shift();
		x.push(temp);
		k--;
	}
	return x;
}

function iterFact(n){
	prod=1;
	for(i=1;i<=n;i++){
		prod=prod*i;
	}
	return prod;
}

var v=[1,2,3,4,5,6,7];
console.log(v);
console.log(rotireSD(v,4),4);
v=[1,2,3,4,5,6,7];
console.log(rotireDS(v,4),4);