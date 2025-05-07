# Fibonacci Function in TypeScript: Recursive vs Memoized Approach

## 1. Naive Recursive Approach

```ts
const fib = (n: number): number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(50));
```

### 🔍 How it works:

This function uses a simple recursive formula for Fibonacci:

```
fib(n) = fib(n - 1) + fib(n - 2)
```

- The base case is when `n <= 2`, it returns `1` (since `fib(1) = fib(2) = 1`).
- This mirrors the mathematical definition of the Fibonacci sequence.

---

### ⚠️ Problem:

This approach recalculates the same values **many times**, leading to exponential growth in the number of function calls.

For example:

```
fib(5) = fib(4) + fib(3)
       = (fib(3) + fib(2)) + (fib(2) + fib(1))
       = ((fib(2) + fib(1)) + 1) + (1 + 1)
```

You can see `fib(2)` and `fib(1)` are recalculated multiple times.

This redundancy becomes **drastically worse** as `n` increases, especially for values like `fib(30)`, `fib(40)`, or `fib(50)`.

---

### ⛔ Time Complexity:

- **Time**: `O(2^n)` — exponential due to repeated calculations.
- **Space**: `O(n)` — because of the recursion call stack.

This is why `fib(50)` using this method is extremely slow and may crash or freeze your environment.

---

## 2. Memoized Recursive Approach

```ts
const fibMemo = (n: number, memo: Record<string, number> = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

console.log(fibMemo(50));
```

---

### 🔍 How it works:

This is the same recursive logic, but **adds memoization**.

- A `memo` object is used to **store previously computed results**.
- Before computing `fib(n)`, it checks if the result already exists in the memo.
- If so, it immediately returns that value — **no need to recompute**.

This prevents the exponential blowup seen in the naive version.

---

### ✅ Optimization:

- Avoids recalculating the same Fibonacci values.
- Ensures each number is **computed only once**.
- Works well even for large values like `fib(500)` or `fib(5000)`.

---

### ⏱️ Time Complexity:

- **Time**: `O(n)` — linear time since each result is used only once.
- **Space**: `O(n)` — for memo storage and the recursion stack.

This makes it **much faster and more efficient** than the naive approach. For example, `fibMemo(50)` is calculated **instantly**.
