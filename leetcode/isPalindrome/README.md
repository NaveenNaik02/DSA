# Palindrome Checker

## Problem Statement

Given a string `s`, return `true` if it is a palindrome, and `false` otherwise.

A string is considered a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

### Examples

```
Input: s = "H123!@321h"
Output: true

Input: s = "race a car"
Output: false
```

### Constraints

- 1 <= s.length <= 2 \* 10^5
- The input string `s` can include any printable ASCII characters.

### Challenge 1

Can you come up with a solution that achieves **O(n)** time complexity?

### Challenge 2

Can you come up with a solution that achieves **O(1)** space complexity?

## Explanation of Regex `/^[a-z0-9]$/i`

This regular expression is used to match a single alphanumeric character (letter or digit) and is case-insensitive.

- `^` asserts the start of the string.
- `[a-z0-9]` matches any lowercase letter from `a` to `z` or any digit from `0` to `9`.
- `$` asserts the end of the string.
- `i` flag makes the match case-insensitive, so uppercase letters are also included.

Together, `/^[a-z0-9]$/i` matches exactly one alphanumeric character regardless of its case.
