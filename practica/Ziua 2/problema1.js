// function avg(x){
// 	var sum=0;
// 	for(var i=1;i<=x;i++){
// 		sum+=i;
// 	}
// 	sum/=x;
// 	return sum;
// }

// function cmmdc(x,y){
// 	while(x!=y){
// 		if(x>y){
// 			x-=y;
// 		}else{
// 			y-=x;
// 		}
// 	}
// 	return x;
// }

// function sir1(x){
// 	var res='';
// 	for(var i in x){
// 		res=x[i]+res;
// 	}
// 	return res;
// }

// function sort(x){
// 	var temp;
// 	for(let i=0;i<x.length-1;i++){
// 		for(let j=0;j<x.length-1-i;j++){
// 			if(x[j]>x[j+1]){
// 				temp=x[j];
// 				x[j]=x[j+1];
// 				x[j+1]=temp;
// 			}
// 		}
// 	}
// 	return x;
// }

function sir2(x){
	var res= {};
	for(let i in x){
		if(x[i]!=' '){
			if(x[i] in res){
				res[x[i]]++;
			}else{
				res[x[i]]=1;
			}
		}
	}
	//console.log(res);
	var sortable = [];
	for (let i in res) {
    	sortable.push([i, res[i]]);
	}
	sortable.sort((a, b) => b[1] - a[1]);
	return sortable;
}

// var x=10;
// var y=55;
// var a='abcdef';
// var b=[69,213,1337,420,6,666,777]
var c='ana are mere';
// console.log(cmmdc(x,y));
// console.log(sir1(a));
// console.log(sort(b));
console.log(sir2(c));