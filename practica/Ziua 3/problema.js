var sir=[3,4,5,6,7,8,9,10,11,12,13];

function prim(x){
	if(x==2){
		return true;
	}
	if(x%2==0 || x==1){
		return false;
	}
	for(let i=3;i*i<=x;i+=2){
		if(x%i==0){
			return false;
		}
	}
	return true;
}

function thin(x){
	var res=[];
	for(let i=0;i<x.length;i++){
		if(prim(x[i])){
			res.push(x[i]);
		}
	}
	return res;
}

function sumac(x){
	var s=0;
	if(x<10){
		return x;
	}
	while(x>10){
		s=s+x%10;
		x=Math.floor(x/10);
	}
	s=s+x;
	return s;
}

function cerinta(x){
	console.log(x);
	x=thin(x);
	console.log(x);
	var s=0;
	for(let i in x){
		console.log(sumac(x[i]));
		s+=sumac(x[i]);
	}
	console.log(s);
	c=sumac(s);
	while(c>=10){
		c=sumac(c);
		console.log(c);
	}
	return c;
}

console.log(cerinta(sir));