function mergeSortedArray(left: number[], right: number[]): number[] {
  const sortedArray: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i += 1;
    } else {
      sortedArray.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    sortedArray.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    sortedArray.push(right[j]);
    j += 1;
  }
  return sortedArray;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return mergeSortedArray(left, right);
}

console.log(mergeSort([1, 3, 5, 2, 4, 6, 7, 8, 9, 10]));
