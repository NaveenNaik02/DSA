# Problem: countConstruct

## Problem Statement

Implement a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings (`wordBank`).

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

## Example

```ts
countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) 
// Output: 1

countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) 
// Output: 0

countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])
// Output: 2
```

## Approach

This is a classic example of a problem that can be solved efficiently using recursion and memoization (top-down dynamic programming).

The base case is when the `target` string is empty (`""`), which means a valid construction path has been found and the function returns `1`.

The function checks if any word in the `wordBank` is a prefix of the `target` and recursively counts how many ways the suffix (remaining part of the target) can be constructed.

## Time Complexity

### Without Memoization

Let:
- `m` be the length of the `target` string
- `n` be the number of words in the `wordBank`

Worst-case time complexity: **O(n^m * m)**

- There are `n` recursive calls at each of the `m` levels (one for each character in the target).
- Each call may create a new string via `slice`, which takes `O(m)` time.

### With Memoization

Time complexity improves drastically: **O(m * n * m)** or **O(m^2 * n)**

- Each unique substring of the target (`m` possible substrings) is computed only once.
- For each substring, we iterate through all `n` words, and each `indexOf` or `slice` operation takes up to `O(m)` time.

## Space Complexity

- **O(m)** for the memo object storing up to `m` keys.
- **O(m)** for the call stack in the worst case.