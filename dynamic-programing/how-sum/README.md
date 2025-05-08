# 🧩 HowSum Problem - Dynamic Programming (with Memoization)

## 📌 Problem Definition

You are given a target sum and an array of positive numbers. Your task is to determine **any combination** of elements that add up exactly to the target sum.

You may use an element from the array **as many times as needed**.

---

### Input:
- `sum` (number): The target sum to achieve.
- `arr` (number[]): The array of positive integers.

### Output:
- A possible combination (array of numbers) that adds up to the target sum.
- If no combination is possible, return `null`.

---

## 🧪 Naive Recursive Solution (Without Memoization)

```ts
const howSum = (sum: number, arr: number[]): number[] | null => {
  if (sum === 0) return [];
  if (sum < 0) return null;

  for (let num of arr) {
    const remainder = sum - num;
    const result = howSum(remainder, arr);
    if (result !== null) {
      return [...result, num];
    }
  }

  return null;
};
```

### ⚠️ Time Complexity (Without Memoization)

- **Time:** O(2^n) — Very inefficient for large inputs.
- **Space:** O(n) — Due to recursion stack and array copying.

This approach tries every possible combination of numbers, leading to an exponential number of recursive calls.

---

## 🧠 Optimized Solution (With Memoization)

```ts
const howSum = (
  sum: number,
  arr: number[],
  memo: Record<string, number[] | null> = {}
): number[] | null => {
  if (sum in memo) return memo[sum];
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

console.log(howSum(7, [5, 3, 4, 7])); // Possible output: [4, 3]
```

### ✅ How It Works:
- Before computing `howSum(sum)`, it checks `memo[sum]`.
- If it's already computed, return it immediately.
- Otherwise, compute recursively and store the result in `memo`.

---

### ⏱️ Time Complexity (With Memoization)

- **Time:** O(n * m)  
  Where `n` = target sum, `m` = array length.
- **Space:** O(n^2)  
  Due to recursion and storing arrays in memo.

---

## 🌳 Problem Structure Visualization (Tree Example)

For `howSum(7, [5, 3, 4, 7])`, the recursive tree could look like:

```
                      7
             /        |        \       \
           2         4         3       0
         / | \      ...       ...
       -3  1  0     ...
```

- At each node, we subtract a number from the array.
- The recursion continues until we hit `0` (success) or `< 0` (failure).
- Memoization stores previously failed paths and skips them.

---

## 🧪 Examples

```ts
howSum(7, [5, 3, 4, 7])  // ➝ [4, 3] or [7]
howSum(7, [2, 4])        // ➝ null
howSum(8, [2, 3, 5])     // ➝ [2, 2, 2, 2] or [3, 5]
howSum(300, [7, 14])     // ➝ null (but fast with memoization)
```
