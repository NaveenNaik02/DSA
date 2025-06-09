const merge = (intervals: number[][]): number[][] => {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [intervals[0]];

  for (let item of intervals) {
    const last = merged[merged.length - 1];
    if (item[0] <= last[1]) {
      last[1] = Math.max(last[1], item[1]);
    } else {
      merged.push(item);
    }
  }
  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
