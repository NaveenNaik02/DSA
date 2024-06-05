/**
 * This function searches for a given value in a sorted array of integers.
 * It uses the binary search algorithm to find the index of the value in
 * the array. If the value is found, the index is returned. If the value is
 * not found, -1 is returned.
 *
 * @param {number[]} arr - The sorted array of integers to search in.
 * @param {number} value - The value to search for in the array.
 * @return {number} - The index of the value in the array if found, -1 if not found.
 */
function search(arr: number[], value: number): number {
  // Initialize two pointers, left and right, to the start and end of the array respectively.
  let left = 0;
  let right = arr.length - 1;

  // While the left pointer is less than or equal to the right pointer,
  // we have not yet found the value in the array.
  while (left <= right) {
    // Calculate the middle index of the array.
    const middle = Math.floor((left + right) / 2);

    // If the value at the middle index is equal to the target value,
    // return the middle index.
    if (arr[middle] === value) {
      return middle;
    }
    // If the value at the middle index is less than the target value,
    // move the left pointer to the right of the middle index to search
    // the right half of the array.
    else if (arr[middle] < value) {
      left = middle + 1;
    }
    // If the value at the middle index is greater than the target value,
    // move the right pointer to the left of the middle index to search
    // the left half of the array.
    else {
      right = middle - 1;
    }
  }
  // If the value is not found in the array, return -1.
  return -1;
}

const arr = [15, 17, 20, 25, 30, 45, 60, 72];
console.log(search(arr, 60));
