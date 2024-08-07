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

## Priority Heap

A **Priority Heap** is a data structure that combines the properties of a priority queue and a binary heap. It allows for efficient insertion of elements with associated priorities and quick retrieval of the element with the highest priority (lowest priority number). In this context, the heap property ensures that the parent node's priority is less than or equal to the priorities of its children.

## Key Properties

1. **Complete Tree**: The binary heap is always a complete tree, meaning all levels are fully filled except possibly the last level, which is filled from left to right.
2. **Heap Property**: For a min-heap, every parent node has a priority less than or equal to its children. This ensures that the root node has the highest priority (lowest priority number).

## Key Advantages of Heaps over Trees

### 1. Efficient Access to Extremes

- **Heap**: In a max heap, the largest element is always at the root, and in a min heap, the smallest element is always at the root. This allows for O(1) access to the extreme elements.
- **Tree**: In a general binary search tree (BST), finding the minimum or maximum element requires traversing the tree, which can take O(log n) time in a balanced tree and O(n) time in the worst case for an unbalanced tree.

### 2. Efficient Insertion and Deletion

- **Heap**: Insertion and deletion operations in a heap are performed in O(log n) time. The heap property is maintained using the bubble-up and bubble-down operations.
- **Tree**: In a BST, insertion and deletion operations also take O(log n) time in a balanced tree but can degrade to O(n) time in an unbalanced tree. Additional rebalancing operations, such as those in AVL or Red-Black trees, add complexity.

### 3. Simplicity in Implementation

- **Heap**: The array-based implementation of a heap is straightforward, with simple calculations for parent and child indices:
  - Parent Index: `Math.floor((index - 1) / 2)`
  - Left Child Index: `2 * index + 1`
  - Right Child Index: `2 * index + 2`
- **Tree**: Implementing a binary tree involves more complex pointer management and rebalancing operations for self-balancing trees like AVL or Red-Black trees.

### 4. Use Case Specific Efficiency

- **Heap**: Heaps are particularly well-suited for implementing priority queues, where the primary operations are inserting elements and extracting the maximum or minimum element.
- **Tree**: Binary search trees are more versatile and can efficiently support a wider range of operations, such as searching for arbitrary elements, range queries, and ordered traversal. However, they may not be as efficient as heaps for priority queue operations.
