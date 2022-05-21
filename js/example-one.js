let arr1 = document.getElementsByClassName('furniture'),
	arr2 = document.getElementsByClassName('furniture2'),
	cache,
	ln1 = arr1.length,
	ln2 = arr2.length,
	num = 0;

for (let i=0; i<ln1; i++) {
	cache = arr1[i].innerHTML;
	for (let t=0; t<ln2; t++)
		if(cache == arr2[t].innerHTML) {
			document.write(" Найдено совпадение: " +  cache + "<br>");
			num++;
		}
}

document.write(' Всего найдено совпадений: ' + num)

/// Счётчик увеличивается только в случае совпадения
// link on task: https://youtu.be/HMW6x5efLPg?list=WL