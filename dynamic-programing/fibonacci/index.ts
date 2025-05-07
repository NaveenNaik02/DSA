//recursive
const fibMemo = (n: number, memo: Record<string, number> = {}): number => {
  if (n in memo) return memo[n];

  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

//iterative
const fibIterative = (n: number) => {
  if (n <= 1) return 1;

  let previous = 1;
  let current = 1;
  for (let i = 3; i <= n; i += 1) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
};

console.log(fibMemo(50));
