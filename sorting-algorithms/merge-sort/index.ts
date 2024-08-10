(() => {
  /**
   * This function implements the merge sort algorithm to sort an array of numbers.
   * The algorithm divides the input array into two halves, sorts each half,
   * and then merges the sorted halves back together.
   *
   * @param arr - The array of numbers to be sorted.
   * @returns The sorted array of numbers.
   */
  function mergeSort(arr: number[]): number[] {
    // Base case: if the array has 1 or fewer elements, it is already sorted.
    if (arr.length <= 1) {
      return arr;
    }

    // Divide the array into two halves.
    const middle = Math.floor(arr.length / 2); // The index of the middle element.
    const left = mergeSort(arr.slice(0, middle)); // Sort the left half of the array.
    const right = mergeSort(arr.slice(middle)); // Sort the right half of the array.

    // Merge the sorted halves back together.
    return mergeArray(left, right);
  }

  /**
   * This function merges two sorted arrays into a single sorted array.
   * It takes two arrays, left and right, as input and returns a new array
   * that contains the elements from both arrays in sorted order.
   *
   * @param left - The first array to be merged.
   * @param right - The second array to be merged.
   * @returns A new array that contains the elements from both arrays in sorted order.
   */
  function mergeArray(left: number[], right: number[]): number[] {
    // Initialize an empty array to store the merged elements.
    const arr: number[] = [];

    // Initialize two pointers, i and j, to the start of each array.
    let i = 0;
    let j = 0;

    // Loop through both arrays until we have compared all elements.
    while (i < left.length && j < right.length) {
      // If the element at the current position in the left array is less than
      // the element at the current position in the right array, add the element
      // from the left array to the merged array and move the left pointer to the
      // next element.
      if (left[i] < right[j]) {
        arr.push(left[i]);
        i += 1;
      }
      // If the element at the current position in the right array is less than
      // or equal to the element at the current position in the left array, add
      // the element from the right array to the merged array and move the right
      // pointer to the next element.
      else {
        arr.push(right[j]);
        j += 1;
      }
    }

    // After the loop, there may be elements left in one of the arrays. Add
    // these elements to the merged array.

    // If there are elements left in the left array, add them to the merged array.
    while (i < left.length) {
      arr.push(left[i]);
      i += 1;
    }

    // If there are elements left in the right array, add them to the merged array.
    while (j < right.length) {
      arr.push(right[j]);
      j += 1;
    }

    // Return the merged array.
    return arr;
  }
  console.log(mergeSort([1, 3, 5, 2, 4, 6, 7, 8, 9, 10]));
})();
