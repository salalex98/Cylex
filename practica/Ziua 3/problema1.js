function generate(n){
	var matrix=[];
	for(let i=0;i<n;i++){
		matrix[i]=[];
		for(let j=0;j<n;j++){
			matrix[i][j]=Math.floor(Math.random() * 10) + 1;
		}
	}
	var s1=0;
	var p1=1;
	var s2=0;
	var p2=1;
	for(let i=0;i<n;i++){
		s1=s1+matrix[i][i];
		s2=s2+matrix[n-i-1][i];
		p1=p1*matrix[i][i];
		p2=p2*matrix[n-i-1][i];
	}
	console.log(s1,s2,p1,p2);
	return matrix;
}

var m=generate(5);
console.log(m);