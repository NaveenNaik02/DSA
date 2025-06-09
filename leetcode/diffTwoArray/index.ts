const diff = (arrA: number[], arrB: number[]): number[] => {
  const map = new Map<number, number>();

  for (const num of arrA) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of arrB) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result: number[] = [];
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
};

console.log(diff([1, 2, 3, 4], [3, 4, 5, 6]));
