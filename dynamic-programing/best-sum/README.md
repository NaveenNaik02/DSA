# 🚀 Best Sum Problem – Dynamic Programming

The **Best Sum** problem is a variation of the classic subset sum problem. The goal is to find the shortest combination of numbers from a given array that adds up to a target sum.

---

## 🧾 Problem Statement

Given a target sum and an array of positive integers, return the **shortest combination of numbers** that add up to the target sum. If there is no combination, return `null`.

### Example

```ts
bestSum(7, [5, 3, 4, 7]); // ➝ [7]
```

---

## 🔢 Approach

### 1. Naive Recursive Approach

- Try every possible combination of numbers to see if they sum to the target.
- For each number, subtract it from the target and recurse with the new value.
- Choose the shortest valid combination.

### 2. Optimized Memoized Approach (Top-down Dynamic Programming)

- Store previously computed results in a memo object to avoid redundant calculations.

---

## 🧠 Code (with Memoization)

```ts
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

console.log(bestSum(7, [5, 3, 4, 7])); // ➝ [7]
```

---

## ⏱️ Time Complexity

### Without Memoization:
- **Time:** `O(n^m)`  
  (where `m = target sum`, `n = array length`)
- **Space:** `O(m)`

### With Memoization:
- **Time:** `O(m * n * m)`  
  (due to copying arrays of max length `m` in worst case)
- **Space:** `O(m^2)`  
  (memo stores arrays of length up to `m`)

---

## ✅ Conclusion

The memoized version drastically reduces time by eliminating repeated work. It ensures each unique sum is only computed once and stores the shortest valid combination found.
