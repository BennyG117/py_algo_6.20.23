/* 
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.

    Ok to use a new array

    Bonus: (no nested loops, new array ok)
    Bonus: Do it in-place (no new array)

*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
//conditional if array is 1 or less it returns itself
    if (nums.length <= 1){
    return nums;
}
// declare new array to store into (starts at 1st element)
let newArr = [nums[0]]

// sort through array starting at seconmd element
for (let i = 1; i < nums.length; i++) {
    //comparing current element with previous one
    if (nums[i] !== nums[i-1]) {
        //if current element is different then add to newArr
        newArr.push(nums[i]);
    }
}
//return newArr result
return newArr
}

console.log(dedupeSorted(nums1));
console.log(dedupeSorted(nums2));
console.log(dedupeSorted(nums3));
console.log(dedupeSorted(nums4));
console.log('===========\n');
/*****************************************************************************/

// Loop through the array, using a for/while loop.
// Conditions to look for: Checking if two indexes next to each other are equal. 
// If they are not equal -> Push to a new array. 

// To do this in place, we can use built ins like pop(). 


// Keep in mind, the array is safe to assume as always sorted lowest to highest. 