const bestSum = (
  sum: number,
  arr: number[],
  memo: Record<string, number[] | null> = {}
): number[] | null => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return [];
  if (sum < 0) return null;

  let shortestCombination: number[] | null = null;

  for (let num of arr) {
    const reminder = sum - num;
    const result = bestSum(reminder, arr, memo);
    if (result !== null) {
      const combinations = [...result, num];
      if (
        !shortestCombination ||
        combinations.length < shortestCombination.length
      ) {
        shortestCombination = combinations;
      }
    }
  }
  memo[sum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
