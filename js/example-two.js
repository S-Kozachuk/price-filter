// #8
let number = [1,1,1,1,3,4,4,2,4,3,3,2,2,2,2,2,5,5,5,6,6,6,6,7,8,9,11],
	number2 = [1,3,4,2,8,11,23,55,84];

let filterNumbers = [...new Set(number)].filter(item => number2.includes(item));

console.log(filterNumbers)

// #9 Array reverse
let number3 = [1,1,1,1,3,4,4,2,4,3,3,2,2,2,2,2,5,5,5,6,6,6,6,7,8,9,11],
	number4 = [1,3,4,2,8,11,23,55,84];

let reverseNumber = number4.reverse();
console.log(reverseNumber);