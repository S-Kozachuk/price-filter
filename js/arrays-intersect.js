// const input1 = [1,2,2,1];
// const input2 = [2,2];

const input3 = [4,9,5,9];
const input4 = [1,9,4,9,8,4,3,9];

const intersect = function (nums1, nums2) {
	let resultArray = [];
	// Get a count of occurences in map (from nums1)
	let store = nums1.reduce((acc,i)=>{
		acc[i] = acc[i] ? acc[i] + 1 : 1;
		return acc;
	}, {})

	// Search the intersections in 2-nd array (nums2)
	for (let i = 0; i < nums2.length; i++) {
		const current = nums2[i];
		let count = store[current];
		if (count) {
			resultArray.push(current);
			store[current] -= 1;
		}
	}

	return 'Intersection: ' + resultArray ;
};

// console.log(intersect(input1, input2));
console.log(intersect(input3, input4));