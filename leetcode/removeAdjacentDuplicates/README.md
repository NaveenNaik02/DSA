
# Problem: Remove Adjacent Duplicates in String (Medium)

## Description

You are given a string `s` and an integer `k`. Write a function to remove **k adjacent duplicates** from `s` where the adjacent characters are equal.

The process should continue until no more k-length adjacent duplicates remain in the string.

## Examples

### Example 1
```
Input: s = "abcd", k = 2  
Output: "abcd"
```

### Example 2
```
Input: s = "deeedbbcccbdaa", k = 3  
Output: "aa"
```

### Example 3
```
Input: s = "pbbcggttciiippooaais", k = 2  
Output: "ps"
```

### Example 4
```
Input: s = "aaabbbacd", k = 3  
Output: "acd"
```

## Explanation

In each example, adjacent groups of the same character with a length of `k` are removed. This process is repeated until no more such groups exist. The final result is returned.

## Constraints

- 1 <= s.length <= 10^5
- 1 <= k <= s.length
- `s` consists of lowercase English letters.

## Function Signature

```python
def removeDuplicates(s: str, k: int) -> str:
    pass
```
