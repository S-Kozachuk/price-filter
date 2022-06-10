// Courses list
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

// Prices variant(filters), custom search
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Filter function
const filterOne = document.querySelector('.filter-one');
const filterTwo = document.querySelector('.filter-two');
const filterThree = document.querySelector('.filter-three');
const output = document.querySelector('.result')
let resultArray = [];

function coursesFilter (filter){
	resultArray = [];
	
		a = filter[0], // Min filter value 
		b = filter[1]; // Max filter value

	for(let i=0; i<courses.length; i++) {
		let minPrice = courses[i].prices[0],
			maxPrice = courses[i].prices[1];
		
		if (a != null) {
			if(minPrice != null && minPrice >= a) {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						resultArray.push(courses[i].name);
					}
				}
				else {
					resultArray.push(courses[i].name);
				}
			}
			else {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						resultArray.push(courses[i].name);
					}
				}
			}
		}
		else {
			if(b != null) {
				if(maxPrice != null && maxPrice <= b){
					resultArray.push(courses[i].name);
				}
			}
		}
	}
};


filterOne.addEventListener('click',()=>{
	coursesFilter(requiredRange1);
	output.innerHTML=`<h4>До 200 рублей</h4>`;
	// for(let i=0;i<resultArray.length;i++){
	// 	output.innerHTML+=`<h2>${resultArray[i]}</h2>`	
	// };
	resultArray.forEach((item, index) => {
		output.innerHTML+=`<h2>${index+1}. ${item}</h2>`;
	});
	console.log(resultArray);
});

filterTwo.addEventListener('click',()=>{
	coursesFilter(requiredRange2);
	output.innerHTML=`<h4>От 100 до 350 рублей</h4>`;
	resultArray.forEach((item,index) => {
		output.innerHTML+=`<h2>${index+1}. ${item}</h2>`;
	});
	console.log(resultArray);
});

filterThree.addEventListener('click',()=>{
	coursesFilter(requiredRange3);
	output.innerHTML=`<h4>От 200 рублей</h4>`;
	resultArray.forEach((item,index) => {
		output.innerHTML+=`<h2>${index+1}. ${item}</h2>`;
	});
	console.log(resultArray);
});