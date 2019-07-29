var obj={};
obj['key']='valoare1';
obj['key1']='valoare2';
obj['key2']='valoare3';
obj['key3']='valoare4';
obj['key4']='valoare5';
obj['key5']='valoare6';
// for(let i in obj){
// 	console.log(i);
// }
for(let i in obj){
	for(let j=0;j<x.length-1-i;j++){
		if(x[j]>x[j+1]){
			temp=x[j];
			x[j]=x[j+1];
			x[j+1]=temp;
		}
	}
}