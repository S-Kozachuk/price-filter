const arr = [5,1,4,40,12];

function compare (a, b) {
	let comparison = 0;
	if(a > b) {
		comparison = 1;
	} else if (b > a) {
		comparison = -1;
	}
	return comparison
}

/*
function compare (a, b){
	return a - b;
}
*/
result = arr.sort(compare);
console.log(result)
