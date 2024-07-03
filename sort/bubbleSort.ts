(() => {
  /**
   * This function implements the bubble sort algorithm to sort an array of numbers.
   *
   * @param arr - The array of numbers to be sorted.
   */
  function bubbleSort(arr: number[]) {
    // Loop through the array from the last index to the second index.
    // This is because we compare each element with the next element.
    // We start with the last index because the largest element will bubble up to the end.
    let noSwap: boolean; // Initialize a flag to track if any swaps were made in the inner loop.
    for (let i = arr.length - 1; i > 0; i -= 1) {
      // Loop through the array from the second last index to the first index.
      // This is because we compare each element with the next element.
      // We start with the second last index because the second largest element will bubble up to the end.
      noSwap = true; // Initialize the flag to true.
      for (let j = i - 1; j >= 0; j -= 1) {
        // Compare the current element with the next element.
        if (arr[i] < arr[j]) {
          // If the current element is less than the next element, swap them.
          // Swap the elements using array destructuring.
          // We assign the next element to the current element and the current element to the next element.
          [arr[i], arr[j]] = [arr[j], arr[i]];
          noSwap = false; // If a swap was made, set the flag to false.
        }
      }
      // If no swaps were made in the inner loop, it means the array is already sorted.
      // So, we can break out of the outer loop.
      if (noSwap) {
        break;
      }
    }
  }

  const arr = [1, 2, 5, 2, 8, 1, 5];
  bubbleSort(arr);
  console.log(arr);
})();
