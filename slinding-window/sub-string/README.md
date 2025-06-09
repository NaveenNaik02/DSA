
# Problem: Longest Substring Without Repeating Characters (Medium)

## Description

Given a string `s`, write a function `longestSubstringWithoutRepeat` that returns the length of the longest substring without repeating characters.

- The substring must consist of **contiguous characters**.
- It cannot contain any **duplicate characters**.
- The input string will contain only **ASCII characters**.
- If the string is empty, return `0`.

## Examples

### Example 1
```python
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2
```python
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3
```python
Input: s = ""
Output: 0
Explanation: The string is empty, so the answer is 0.
```

### Example 4
```python
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
```

## Constraints

- The input string will contain only printable ASCII characters.
- 0 <= s.length <= 10⁵

## Challenge

Can you solve this problem in **O(n)** time complexity?

## Function Signature

```python
def longestSubstringWithoutRepeat(s: str) -> int:
    pass
```
