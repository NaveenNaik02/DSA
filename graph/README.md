# Graph Data Structure and Traversal Algorithms

## What is a Graph?

A graph is a data structure that consists of a set of vertices (nodes) connected by edges (links). Graphs can represent various real-world structures like social networks, computer networks, and more.

### Types of Graphs

- **Undirected Graph**: Edges have no direction, meaning if there is an edge between vertex `A` and vertex `B`, you can traverse from `A` to `B` and vice versa.
- **Directed Graph**: Edges have a direction, meaning you can only traverse from one vertex to another in the specified direction.

### Graph Representation

Graphs are commonly represented using:

- **Adjacency List**: Each vertex has a list of all vertices it is directly connected to.
- **Adjacency Matrix**: A 2D array where each cell represents the presence or absence of an edge between two vertices.

The code provided implements an undirected graph using an adjacency list.

## Graph Traversal Algorithms

### Depth-First Search (DFS)

DFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores as far as possible along each branch before backtracking.

- **Recursive DFS**:
  - Starts from the given node and visits all the nodes along a path until it reaches a node with no unvisited neighbors.
  - It then backtracks and explores other paths.
- **Iterative DFS**:
  - Uses a stack to simulate the call stack of the recursive approach.
  - It allows for an iterative traversal of the graph using a similar depth-first strategy.

**Use Case**: DFS is useful for scenarios like topological sorting, solving puzzles (e.g., mazes), and detecting cycles in graphs.

### Breadth-First Search (BFS)

BFS is another algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores all neighbors at the present depth prior to moving on to nodes at the next depth level.

- **BFS Implementation**:
  - Uses a queue to keep track of nodes to explore.
  - It visits the starting node, then all its neighbors, then the neighbors' neighbors, and so on.

**Use Case**: BFS is ideal for finding the shortest path in an unweighted graph and for level-order traversal in trees.
