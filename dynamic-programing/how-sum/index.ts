const howSum = (
  sum: number,
  arr: number[],
  memo: Record<string, number[] | null> = {}
): number[] | null => {
  if (sum === 0) return [];
  if (sum < 0) return null;

  for (let num of arr) {
    const reminder = sum - num;
    const result = howSum(reminder, arr, memo);
    if (result !== null) {
      memo[sum] = [...result, num];
      return memo[sum];
    }
  }

  memo[sum] = null;
  return null;
};

console.log(howSum(7, [5, 3, 4, 7]));
