(() => {
  /**
   * This function implements the insertion sort algorithm to sort an array of numbers.
   *
   * @param arr - The array of numbers to be sorted.
   */
  function insertionSort(arr: number[]) {
    // Loop through the array from the second index to the last index.
    // Each iteration, we compare the current element with the previous elements.
    for (let i = 0; i < arr.length; i += 1) {
      // Store the current element in a variable.
      const currentItem = arr[i];

      // Start from the current element and move backwards until we reach the first element or find a smaller element.
      for (var j = i - 1; j >= 0 && arr[j] > currentItem; j -= 1) {
        // Shift the element to the right and decrement the index.
        arr[j + 1] = arr[j];
      }

      // Place the current element at its correct position by replacing the element at the calculated index.
      arr[j + 1] = currentItem;
    }
  }
  const arr = [5, 4, 3, 2, 1];
  insertionSort(arr);
  console.log(arr);
})();
