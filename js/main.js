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

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Filter function
function coursesFilter (filter){
	let a = filter[0], // Min filter value 
		b = filter[1]; // Max filter value
	
	 for(let i=0; i<fan.length; i++) {
		let minPrice = fan[i].prices[0],
			maxPrice = fan[i].prices[1];
		
		if (a != null) {
			if(minPrice != null && minPrice >= a) {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						console.log(fan[i].name)
					}
				}
				else {
					console.log(fan[i].name)
				}
			}
			else {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						console.log(fan[i].name)
					}
				}
			}
		}
		else {
			if(b != null) {
				if(maxPrice != null && maxPrice <= b){
					console.log(fan[i].name)
				}
			}
		}
	 }
	
};
	

//(initial(coursesFilter));
//(initial(coursesFilter));
(initial(coursesFilter));

 