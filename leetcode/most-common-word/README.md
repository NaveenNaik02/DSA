
# Problem: Most Common Words (Easy)

## Description

We want to find the most frequently used words in a long string of text. Write a function `most_common_words(text)` that returns an array (or list) containing words and their frequencies, **sorted**:

- From **most common to least common**
- With **ties broken by alphabetical order**

For accurate frequency counting, your solution should:
- **Ignore punctuation**
- **Ignore capitalization** (case-insensitive comparison)

## Examples

### Example 1

```python
text = 'It was the best of times, it was the worst of times.'
most_common_words(text)
```

### Output:
```python
[
    ['it', 2],
    ['of', 2],
    ['the', 2],
    ['times', 2],
    ['was', 2],
    ['best', 1],
    ['worst', 1],
]
```

## Notes

- Words should be **normalized to lowercase**.
- Punctuation like `.`, `,`, etc. should be **stripped** out.
- Return a list of `[word, frequency]` pairs.

## Constraints

- Input text will contain only ASCII characters.
- Assume reasonable length (e.g., a few thousand words max).

## Function Signature

```python
def most_common_words(text: str) -> list[list[str, int]]:
    pass
```
