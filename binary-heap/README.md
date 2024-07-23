## What is a Binary Heap?

A **Binary Heap** is a complete binary tree that satisfies the heap property. In a binary heap, for any given node `i`:

1. The tree is complete, meaning all levels are fully filled except possibly the last level, which is filled from left to right.
2. The heap property varies based on the type of heap:
   - **Max Heap**: Every parent node is greater than or equal to its children.
   - **Min Heap**: Every parent node is less than or equal to its children.

## Max Binary Heap

A **Max Binary Heap** is a binary heap where every parent node has a value greater than or equal to the values of its children. This ensures that the largest value is always at the root.

### Key Properties

1. **Complete Tree**: All levels of the tree are fully filled except possibly for the last level, which is filled from left to right.
2. **Heap Property**: Every parent node is greater than or equal to its children.

### Common Operations

1. **Insert**: Adding a new element to the heap while maintaining the heap property.
2. **Extract Max**: Removing and returning the largest element (the root) while maintaining the heap property.
3. **Peek**: Returning the largest element without removing it.

### Time Complexities

- **Insertion**: O(log n)
- **Extract Max**: O(log n)
- **Peek**: O(1)

### Example of Max Binary Heap

Consider the following max binary heap:

```
     41
    /   \
   35    33
  /  \   /
18   27 12
```

Here, each parent node is greater than or equal to its children.

### How to Insert into a Max Binary Heap (Bubbling Up)

1. **Add the element to the end of the heap**: Insert the new element at the end of the array (heap).
2. **Bubble up**: Compare the newly added element with its parent; if the new element is greater, swap it with its parent. Repeat this process until the heap property is restored.

**Formula for Bubble Up**:

- **Parent Index**: `Math.floor((index - 1) / 2)`

### How to Remove the Maximum Value (Bubbling Down)

1. **Remove the root**: Replace the root of the heap with the last element in the array and remove the last element.
2. **Bubble down**: Compare the new root with its children; if the root is smaller than one of its children, swap it with the larger child. Repeat this process until the heap property is restored.

**Formula for Bubble Down**:

- **Left Child Index**: `2 * index + 1`
- **Right Child Index**: `2 * index + 2`
