
# Problem: Reverse a Sentence (Easy)

## Description

You are given an array of characters `arr` that consists of sequences of characters separated by **space characters**. Each space-delimited sequence of characters defines a word.

Implement a function `reverseWords` that **reverses the order of the words** in the array **in the most efficient manner**. The characters of each word should remain in the same order; only the order of words should be reversed.

## Example

### Input:
```python
arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
        'm', 'a', 'k', 'e', 's', '  ',
        'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
```

### Output:
```python
[ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
  'm', 'a', 'k', 'e', 's', '  ',
  'p', 'e', 'r', 'f', 'e', 'c', 't' ]
```

## Notes

- Words are separated by **double spaces** (`'  '`).
- You must reverse the **order of words**, not the characters inside the words.

## Constraints

- The input array consists only of printable ASCII characters and spaces.
- The array will not start or end with extra spaces.
- Multiple spaces between words are allowed to be consistent.

## Function Signature

```python
def reverseWords(arr: list[str]) -> list[str]:
    pass
```

## Follow-up

- Explain your solution.
- Analyze the time and space complexity.
