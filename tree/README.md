## Binary Search Tree (BST)

A **Binary Search Tree (BST)** is a data structure that facilitates fast lookup, addition, and deletion of items. Each node in a BST has at most two children, referred to as the left child and the right child. The tree maintains the following properties:

1. The left subtree of a node contains only nodes with values less than the node's value.
2. The right subtree of a node contains only nodes with values greater than the node's value.
3. Both the left and right subtrees must also be binary search trees.

### Visual Representation of a BST

Given the sequence `10, 5, 2, 7, 15, 12, 20`, here is the visual representation of the BST:

```
       10
      /  \
     5    15
    / \   / \
   2   7 12  20
```

## Depth-First Search (DFS) Traversal

There are three common types of depth-first search (DFS) traversal methods: pre-order, in-order, and post-order.

### Pre-order Traversal

In pre-order traversal, the nodes are recursively visited in the following order:

1. Visit the root node.
2. Traverse the left subtree in pre-order.
3. Traverse the right subtree in pre-order.

**Example:**

For the BST above, the pre-order traversal sequence would be: `10, 5, 2, 7, 15, 12, 20`.

### In-order Traversal

In in-order traversal, the nodes are recursively visited in the following order:

1. Traverse the left subtree in in-order.
2. Visit the root node.
3. Traverse the right subtree in in-order.

**Example:**

For the BST above, the in-order traversal sequence would be: `2, 5, 7, 10, 12, 15, 20`.

### Post-order Traversal

In post-order traversal, the nodes are recursively visited in the following order:

1. Traverse the left subtree in post-order.
2. Traverse the right subtree in post-order.
3. Visit the root node.

**Example:**

For the BST above, the post-order traversal sequence would be: `2, 7, 5, 12, 20, 15, 10`.

## Breadth-First Search (BFS)

**Breadth-First Search (BFS)** is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or an arbitrary node in a graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

**BFS Traversal**: `10 -> 5 -> 15 -> 2 -> 7 -> 12 -> 20`
