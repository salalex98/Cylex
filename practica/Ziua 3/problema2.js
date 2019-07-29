var x="x+y-12=5";
var separators=['+','-','='];

function tip(x){
	var res=[]
	res=x.split('=');
	rasp=Number(res[1]);
	x=res[0];
	res=x.split('+');
	for(let i in res){
		for(let j in res[i]){
			if(res[i][j]=='-'){
				res[i]=res[i].split('-');
			}
		}
	}
	x=[];
	for(let i in res){
		if(Array.isArray(res[i])){
			for(let j in res[i]){
				if(Number(res[i][j])==res[i][j]){
					x.push(Math.abs(Number(res[i][j]))*-1);					
				}else{
					x.push('-'+res[i][j]);
				}
			}
		}else{
			if(Number(res[i])==res[i]){
					x.push(Math.abs(Number(res[i])));					
			}else{
				x.push('+'+res[i]);
			}
		}
	}
	console.log(x,rasp);
	res=[];
	for(let i in x){
		if(Number(x[i])==x[i]){
			rasp=rasp+Number(x[i])*-1;
		}else{
			res.push(x[i]);
		}
	}
	console.log(res,rasp);
}
tip(x);