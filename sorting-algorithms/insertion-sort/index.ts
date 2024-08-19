(() => {
  function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i += 1) {
      const currentItem = arr[i];

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
