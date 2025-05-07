const canSum = (
  sum: number,
  arr: number[],
  memo: Record<string, boolean> = {}
): boolean => {
  if (sum in memo) return memo[sum];
  if (sum === 0) return true;

  if (sum < 0) return false;

  for (let num of arr) {
    const reminder = sum - num;
    if (canSum(reminder, arr, memo)) {
      memo[sum] = true;
      return true;
    }
  }
  memo[sum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));
