(() => {
  function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  const arr = [5, 4, 3, 2, 1];
  selectionSort(arr);
  console.log(arr);
})();
