(() => {
  // This function implements the selection sort algorithm to sort an array of numbers.
  // It loops through the array and finds the minimum value in the unsorted portion of the array.
  // It then swaps that minimum value with the first element of the unsorted portion.
  // This process is repeated for each element in the array until the entire array is sorted.
  function selectionSort(arr: number[]) {
    // Loop through the array from the last index to the second index.
    // This is because we compare each element with the next element.
    // We start with the last index because the largest element will bubble up to the end.
    for (let i = 0; i < arr.length - 1; i += 1) {
      // Initialize a variable to keep track of the index of the minimum value.
      let minIndex = i;
      // Loop through the unsorted portion of the array, starting from the element after the current minimum.
      // This is because we want to find the minimum value in the unsorted portion.
      for (let j = i + 1; j < arr.length; j += 1) {
        // If the current element is less than the minimum value, update the minimum value and its index.
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // If the current minimum value is not already in its correct position, swap it with the first element of the unsorted portion.
      if (i !== minIndex) {
        // Swap the elements using array destructuring.
        // We assign the minimum value to the current element and the current element to the minimum value.
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
      }
    }
  }
  const arr = [5, 4, 3, 2, 1];
  selectionSort(arr);
  console.log(arr);
})();
