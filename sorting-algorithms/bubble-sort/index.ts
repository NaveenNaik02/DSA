(() => {
  function bubbleSort(arr: number[]) {
    let noSwap: boolean;

    // start with the last index because the largest element will bubble up to the end.
    for (let i = arr.length - 1; i > 0; i -= 1) {
      noSwap = true;
      for (let j = i - 1; j >= 0; j -= 1) {
        if (arr[j] > arr[i]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
          noSwap = false;
        }
      }

      // if no swaps were made in the inner loop, it means the array is already sorted.
      if (noSwap) return;
    }
  }
  const arr = [1, 2, 5, 2, 8, 1, 5];
  bubbleSort(arr);
  console.log(arr);
})();
