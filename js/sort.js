/*
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


function compare (a, b){
	return a - b;
}

result = arr.sort(compare);
console.log(result)
*/

var arr = [12, 7, 3, 15, 5, 134, 8, 1];
// let arr2 = arr;

arr.sort(function(a , b) {
	console.log(a, b);
})

console.log(arr);

// По умолчпнию метод сорт сортирует все элеиенты массива
// как строки (лексикографический метод).

/*
Правильная сортировка чисел.
Что бы переопределить лексикографичекий принцип сортировки
на цифровой в метод сорт нужно передать функцию сравнивающую значения массива
как цифры.
В качестве параметра метод sort может принмать
функцию с переменными.
В перемнные последовательно подставляются значения из массива. Идёт попарное 
сравнение. В результате каждого сравнения метод с помощью переданных ему условий
(в виде функции) определяет нужно менять позицию (индекс) элемента в массиве или нет
В зависимости от размера массива для полной сортировки методу требуется седлать множестово
проходов по массиву.

Таже можно сделать защиту от лишних проходов. Если во время предыдушей итетрации
не было ни одной смены позиции (индекса), значит все элементы размещены в правильном
порядке. Значит дальнейший перебор массива не нужен.
*/



// Сортировка массива по возврастанию (как цифры)
/*
arr.sort(function(a, b){
	if (a > b) {
		return 1; // возвращает 1, если нужна перестановка
	};
	if (a <= b) {
		return -1; // если перестановка не нужна (элементы уже имеют правильный порядок)
	};

});

console.log(arr);
*/
/*
По сути метод sort "следит" не за числом, а за знаком.
Если возращается положительное число, (знак +), нужно изменить порядок (инндекс).
Если функция возвращает отриц. число (знак -), порядок (индекс) менять не нужно.
Поэтому функцию можно сократить. Достаточно возвращать разностьь 2-х элементов.
*/

// Сокращённый синтаксис
arr.sort(function(a, b){
	return a - b;
})

console.log(arr);
/*
Если при вычитании переменной b из переменной a получается положительное число,
значит a > b, следовательно нужна перестановка (при сортировке по возвр.)
Если же при вычитанни b из a возвращается 0 (если a = b) или отриц. число значит a < b,
соответственно перестановку (изменение индекса) делать не нужно 
*/