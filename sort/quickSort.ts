(() => {
  /**
   * This function takes an array and a range of indices,
   * and moves the pivot element to its correct position in the array.
   *
   * @param arr - The array to be sorted.
   * @param start - The starting index of the range.
   * @param end - The ending index of the range.
   * @returns The index of the pivot element after it has been moved.
   */
  function pivot(
    arr: number[],
    start: number = 0, // The default value of start is 0.
    end: number = arr.length - 1 // The default value of end is arr.length - 1.
  ): number {
    /** The element at the start index of the array is the pivot element. */
    const pivotElement = arr[start];
    /** The index of the element to swap with the pivot element. */
    let swapIndex = start;

    /**
     * Loop through the range of indices.
     * For each element in the range, compare it to the pivot element.
     * If the element is less than the pivot element, increment the swap index and swap the elements.
     */
    for (let i = start; i <= end; i += 1) {
      if (pivotElement > arr[i]) {
        swapIndex += 1;
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
    }

    /**
     * Move the pivot element to its correct position by swapping it with the element at the swap index.
     * Return the swap index.
     */
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
  }
  /**
   * This function implements the quick sort algorithm to sort an array of numbers.
   * The algorithm divides the input array into two halves, sorts each half,
   * and then merges the sorted halves back together.
   *
   * @param arr - The array of numbers to be sorted.
   * @param left - The starting index of the range to be sorted. The default value is 0.
   * @param right - The ending index of the range to be sorted. The default value is arr.length - 1.
   * @returns The sorted array of numbers.
   */
  function quickSort(
    arr: number[],
    left: number = 0, // The default value of left is 0.
    right: number = arr.length - 1 // The default value of right is arr.length - 1.
  ) {
    // Base case: if the range of indices is 1 or fewer elements, it is already sorted.
    if (left < right) {
      // Choose a pivot element and move it to its correct position in the array.
      const pivotIndex = pivot(arr, left, right);

      // Recursively sort the left half of the array.
      quickSort(arr, left, pivotIndex - 1);

      // Recursively sort the right half of the array.
      quickSort(arr, pivotIndex + 1, right);
    }

    // Return the sorted array.
    return arr;
  }
  const arr = [5, 2, 1, 8, 4, 7, 6, 3, -1, -2];
  quickSort(arr);
  console.log(arr);
})();
