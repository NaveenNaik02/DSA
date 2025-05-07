
# 🌟 canSum Problem - Dynamic Programming

## 🧩 Problem Statement

Given a target sum and an array of positive integers, write a function `canSum(target, numbers)` that returns a boolean indicating whether the target sum can be **constructed by summing any combination** (repetition allowed) of elements from the array.

### ✏️ Function Signature

```ts
const canSum = (target: number, numbers: number[]): boolean
```

### ✅ Example Outputs

```ts
canSum(7, [2, 3]);           // true (2 + 2 + 3)
canSum(7, [5, 3, 4, 7]);     // true (7)
canSum(7, [2, 4]);           // false
canSum(300, [7, 14]);        // false (inefficient without memo)
```

---

## 🧠 Naive Recursive Solution (with memoization)

```ts
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
```

---

## 🌲 Recursive Tree Structure (Example: `canSum(7, [2, 3])`)

```
canSum(7)
├── canSum(5)
│   ├── canSum(3)
│   │   ├── canSum(1)
│   │   │   ├── canSum(-1) ❌
│   │   │   └── canSum(-2) ❌
│   │   └── canSum(0) ✅
│   └── canSum(2)
│       ├── canSum(0) ✅
│       └── ...
└── canSum(4)
    ├── canSum(2)
    └── canSum(1)
```

- ✅ indicates a path found
- ❌ indicates base case `sum < 0` → `false`

---

## 🧾 Base Cases

1. `sum === 0` → return `true` (target achieved)
2. `sum < 0` → return `false` (overshot the target)

---

## 🔁 Recursive Case

Loop through each number in the array:
- Subtract the number from the current `sum` to get the `remainder`
- Recursively check `canSum(remainder, arr)`
- If any call returns `true`, memoize and return `true`

---

## 🧮 Time Complexity

### ❌ Without Memoization:
**Time:** `O(2^n)` — exponential  
**Space:** `O(n)` — call stack depth

### ✅ With Memoization:
**Time:** `O(m * n)`  
- `m` = target sum  
- `n` = number of elements in array  

**Space:** `O(m)` — for memo

---

## 📦 Memoization

Memoization avoids redundant recursive calls by caching the result for a given `sum`.

This transforms the solution from exponential to polynomial time — crucial for large inputs like `canSum(300, [7, 14])`.

---

## 🏁 Summary

- Recursive brute-force ➡️ slow for large inputs  
- Memoization ➡️ efficient and scalable  
- Great example of **top-down dynamic programming**
