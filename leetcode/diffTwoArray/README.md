
# Problem: Symmetric Difference Between Two Arrays (Medium)

## Description

Write a function `diff(arrA, arrB)` that accepts two arrays and returns a new array containing all values that are **not present in both arrays**. In other words, return the **symmetric difference** between the two arrays.

The result should include elements that are **unique to each array**. The order of the elements in the result does not matter, and duplicate values can be ignored if they appear multiple times in the same array.

## Examples

### Example 1
```python
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
diff(a, b)  # => [1, 2, 5, 6]
```

### Example 2
```python
a = [1, 2, 1]
b = [2, 1, 2]
diff(a, b)  # => []
```

## Notes

- Elements in the result must be from only one of the input arrays, not both.
- The result does **not** need to be sorted.
- Repeated values do not need to be handled specially — assume set-like behavior.

## Hints

- Hint 1: Consider using data structures with fast lookup, like sets or maps.
- Hint 2: Iterate through both arrays to compare elements.
- Hint 3: Focus on finding values that are **not shared** between the arrays.

## Challenge

Can you implement this solution with **O(n)** time complexity?

## Function Signature

```python
def diff(arrA: list[int], arrB: list[int]) -> list[int]:
    pass
```
