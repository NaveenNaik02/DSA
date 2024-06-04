/**
 * Function to find the maximum sum of n consecutive elements in an array.
 * @param {number[]} arr - The input array of numbers.
 * @param {number} n - The number of consecutive elements to consider.
 * @returns {number | null} - The maximum sum of n consecutive elements, or null if n is greater than the length of the array.
 */

//function without using sliding window, has O(n^2) time complexity
function fn(arr: number[], n: number): number | null {
  let maxSum: number = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i += 1) {
    let temp: number = 0;

    for (let j: number = i; j < i + n; j += 1) {
      temp += arr[j];
    }

    if (temp > maxSum) {
      maxSum = temp;
    }
  }

  return maxSum;
}

//function using sliding window, has O(n) time complexity
function maxSubArraySum(arr: number[], n: number): number | null {
  // If n is greater than the length of the array, return null.
  if (n > arr.length) {
    return null;
  }

  // Initialize variables to keep track of the maximum sum and the temporary sum.
  let maxSum = 0;
  let tempSum = 0;

  // Prepare the initial window of length n by adding the elements to the temporary sum.
  for (let i = 0; i < n; i += 1) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Slide the window by adding the next number and subtracting the number leaving the window.
  // Update the maximum sum if the temporary sum is greater.
  for (let i = n; i < arr.length; i += 1) {
    // Add the next number to the temporary sum.
    tempSum = tempSum + arr[i];
    // Subtract the number leaving the window.
    tempSum -= arr[i - n];
    // Update the maximum sum if the temporary sum is greater.
    maxSum = Math.max(tempSum, maxSum);
  }

  // Return the maximum sum.
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3));
