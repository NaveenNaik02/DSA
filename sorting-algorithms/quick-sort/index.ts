(() => {
  function pivot(arr: number[], start: number, end: number) {
    const pivotElement = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i += 1) {
      if (pivotElement > arr[i]) {
        swapIndex += 1;
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
    }

    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex;
  }

  function quickSort(
    arr: number[],
    left: number = 0,
    right: number = arr.length - 1
  ) {
    if (left < right) {
      const pivotIndex = pivot(arr, left, right);
      quickSort(arr, 0, pivotIndex);
      quickSort(arr, pivotIndex + 1, right);
    }
  }

  const arr = [5, 2, 1, 8, 4, 7, 6, 3, -1, -2];
  quickSort(arr);
  console.log(arr);
})();
