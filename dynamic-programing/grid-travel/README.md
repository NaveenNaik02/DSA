
# 🧭 Grid Traveler Algorithm in TypeScript

The **Grid Traveler** problem is a classic dynamic programming challenge. It asks:

> "Given a grid of size `m x n`, how many ways can you travel from the top-left corner to the bottom-right corner **only moving right or down**?"

---

## 📌 Problem Statement

You are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move **down** or **right**.

**Input:** Two integers `m` and `n` — dimensions of the grid  
**Output:** Number of unique paths from top-left to bottom-right

---

### 🧭 Visual Representation of Grid

For a `3x3` grid, the movement options look like this:

```
(0,0) → (0,1) → (0,2)
  ↓       ↓       ↓
(1,0) → (1,1) → (1,2)
  ↓       ↓       ↓
(2,0) → (2,1) → (2,2)
```

Each step is a move either to the right or down.

---

## 1. 🧪 Naive Recursive Solution

```ts
const gridTraveler = (m: number, n: number): number => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(3, 3)); // ➝ 6
```

### 🔍 How it works:

**Base case:**

- If either `m` or `n` is 0, return 0 (no grid).
- If `m === 1 && n === 1`, you're already at the destination → 1 way.

**Recursive step:**

At any point, you can either:

- Move **down** → `gridTraveler(m - 1, n)`
- Move **right** → `gridTraveler(m, n - 1)`

So total paths = sum of both.

### ⚠️ Problem:

- It recalculates the same subproblems multiple times.
- Exponential time complexity → **O(2^(m+n))**

---

## 2. 🧠 Optimized with Memoization

```ts
const gridTravelerMemo = (
  m: number,
  n: number,
  memo: Record<string, number> = {}
): number => {
  const key = `${m},${n}`;
  const revKey = `${n},${m}`; // symmetry optimization

  if (key in memo) return memo[key];
  if (revKey in memo) return memo[revKey];

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] =
    gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerMemo(18, 18)); // ➝ 2333606220
```

### ✅ Optimization:

- Uses a memo object to store previously computed results.
- Also uses `m,n` and `n,m` as equivalent keys (grid symmetry).

### ⏱️ Time Complexity:

- **O(m * n)** — each unique pair (m, n) is calculated once.
