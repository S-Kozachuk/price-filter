// Cycle for
let a = [1,2,3,4];
let sum = 0;

for (let i=0; i < a.length; i++) {
	sum = sum + a[i];
}

console.log(sum);

// Метод Reduce
// prev - значение, вычисленное в процессе выполнения предыдущего
// цикла (итерации).
// item - значение элемента перебираемого массива


let b = a.reduce(function(prev, item){

})