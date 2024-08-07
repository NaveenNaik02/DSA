# Dijkstra's Algorithm

Dijkstra's Algorithm is a well-known algorithm used for finding the shortest paths between nodes in a graph, particularly when dealing with graphs that have non-negative edge weights. It's widely applied in fields like network routing and geographic mapping.

## Key Concepts w.r.t Code Implementation

- **Graph Representation**: The graph is typically represented as an adjacency list, where each node points to its neighbors along with the weights of the edges connecting them.
- **Distance Array**: An array (or object) is used to store the shortest distance from the start node to every other node. Initially, all distances are set to `Infinity`, except for the start node, which is set to `0`.
- **Priority Queue**: A priority queue is used to efficiently fetch the next node with the smallest known distance. This helps to minimize the number of nodes processed and ensures that the algorithm runs efficiently.

## How Dijkstra's Algorithm Works

1. **Initialization**:

   - Initialize the distance to the source node as `0` and all other nodes as `Infinity`.
   - Use a priority queue to store nodes, with the priority being the shortest known distance to that node.
   - Insert the start node into the priority queue with a distance of `0`.

2. **Visit Nodes**:

   - Extract the node with the smallest distance from the priority queue.
   - For this node, consider all of its unvisited neighbors.
   - For each neighbor, calculate the tentative distance from the start node to this neighbor through the current node.
   - If this tentative distance is less than the currently known distance, update the distance and add the neighbor to the priority queue.

3. **Update and Continue**:

   - Mark the current node as visited and continue by extracting the next node with the smallest distance from the priority queue.
   - Repeat the process until all nodes have been visited or the priority queue is empty.

4. **Result**:
   - Once the algorithm completes, the distance array will contain the shortest distance from the start node to each other node in the graph.

### How the Priority Queue is Used

- **Enqueueing Nodes**: When a node's distance is updated (i.e., a shorter path to the node is found), that node is added to the priority queue with its new distance. This ensures that nodes with smaller distances are processed first.
- **Dequeueing Nodes**: The priority queue allows for efficient removal of the node with the smallest distance. This is crucial for ensuring that the algorithm always processes the most promising node next.
- **Efficiency**: By using a priority queue, Dijkstra's Algorithm can efficiently manage and update the nodes to be processed, significantly improving performance compared to scanning all nodes to find the minimum distance.

## Complexity Analysis

### Time Complexity

The time complexity of Dijkstra's Algorithm depends on the data structure used for the priority queue:

- **Using a simple array-based priority queue**:

  - Inserting a node into the queue takes `O(1)` time.
  - Extracting the minimum (smallest distance) node requires scanning the entire queue, which takes `O(V)` time, where `V` is the number of vertices.
  - For a graph with `V` vertices and `E` edges, the overall time complexity is `O(V^2 + E)`.

- **Using a binary heap (priority heap)**:
  - Inserting a node into the queue takes `O(log V)` time.
  - Extracting the minimum node also takes `O(log V)` time.
  - The overall time complexity for Dijkstra's Algorithm with a binary heap is `O((V + E) log V)`.

### Space Complexity

The space complexity of Dijkstra's Algorithm is `O(V + E)`, where:

- `V` is the number of vertices (for storing distances, visited nodes, and the priority queue).
- `E` is the number of edges (for storing the graph's adjacency list).
