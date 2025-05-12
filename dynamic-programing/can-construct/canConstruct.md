
# Problem: canConstruct

## Problem Statement

Implement a function `canConstruct(target: string, wordBank: string[]): boolean` that determines whether the `target` string can be constructed by concatenating elements of the `wordBank` array.

Each element in `wordBank` can be used as many times as needed.

### Example

```ts
canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) // true
canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) // false
```

## Approach

Use recursion with memoization to efficiently solve the problem by storing intermediate results.

### Without Memoization

- **Time Complexity**: O(n^m * m)
  - `n` = length of `wordBank`
  - `m` = length of the `target`
  - In the worst case, every suffix of `target` may recursively branch out to all `n` words, leading to an exponential number of calls.
  - Each string operation (e.g., `slice`) takes up to `O(m)` time.

### With Memoization

- **Time Complexity**: O(n * m^2)
  - There are `m` possible target suffixes, and each word comparison and slice takes up to `O(m)`.
  - Avoids recomputing results for the same suffixes.

## Code

```ts
const canConstruct = (
  target: string,
  wordBank: string[],
  memo: Record<string, boolean> = {}
): boolean => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
```

## Conclusion

Using memoization drastically improves performance for larger inputs by preventing redundant recursive calls.
