/**
 * This function takes an array of sorted integers as input and
 * searches for the first pair of integers whose sum is equal to zero.
 * If a pair is found, it returns an array containing both integers.
 * If no pair is found, it returns undefined.
 *
 * @param arr - The sorted array of integers
 * @returns An array containing the first pair of integers whose sum is zero, or undefined if no such pair exists.
 */
function sumZero(arr: number[]): [number, number] | undefined {
  // Initialize two pointers, left and right, to the start and end of the array respectively.
  let left = 0;
  let right = arr.length;

  // While the left pointer is less than the right pointer,
  // we have not yet found a pair of integers whose sum is zero.
  while (left < right) {
    // Calculate the sum of the integers at the left and right pointers.
    const sum = arr[left] + arr[right];

    // If the sum is zero, we have found a pair of integers whose sum is zero.
    if (sum === 0) {
      // Return an array containing both integers.
      return [arr[left], arr[right]];
    }
    // If the sum is less than zero, we need to move the left pointer to the right to find a smaller sum.
    else if (sum < 0) {
      left += 1;
    }
    // If the sum is greater than zero, we need to move the right pointer to the left to find a smaller sum.
    else {
      right -= 1;
    }
  }
  // If no pair of integers whose sum is zero is found, return undefined.
  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3]
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, -1])); // [1, -1]
