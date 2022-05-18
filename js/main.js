// Список курсов
let courses = [
	{ name: "Courses in England", prices: [0, 100] }, 
	{ name: "Courses in Germany", prices: [500, null] }, 
	{ name: "Courses in Italy", prices: [100, 200] }, 
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

// Вывов значений объекта
result = Object.keys(courses);
	// Получение значения name
console.log(courses[3].name);
	// Получение отдельного элемента значения по №
console.log(courses[3].name [11]);
	// Доступ к значению вложенного массива
console.log(courses[0].prices[0]);

// Вывод значений вложенного массива (доступ к ценам)
console.log(courses[2]. prices)


// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];




//let result = courses.filter()