/**
 * This function counts the number of unique values in a sorted array.
 *
 * @param {number[]} arr - The input array of sorted numbers.
 * @return {number} The number of unique values in the array.
 */
function countUniqueValues(arr: number[]): number {
  // If the array is empty, return 0.
  if (arr.length === 0) {
    return 0;
  }

  // Initialize a variable to keep track of the index of the last unique value.
  let i = 0;

  // Iterate over the array, starting from the second element.
  for (let j = 1; j < arr.length; j += 1) {
    // If the current element is different from the previous element,
    // increment the index and replace the element at the new index with the current element.
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }

  // Return the index plus one, which represents the number of unique values.
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 4]));
