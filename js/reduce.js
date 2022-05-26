let a = [2,5,7,1];
let b = a.reduce(function(previousValue,item){
	return previousValue + item;
});
console.log(b);