(() => {
  class Graph {
    nodes: { [key: string]: { [neighbor: string]: number } };
    constructor() {
      this.nodes = {};
    }

    addNode(node: string) {
      if (!this.nodes[node]) {
        this.nodes[node] = {};
      }
    }

    addEdge(node1: string, node2: string, weight: number) {
      this.nodes[node1][node2] = weight;
      this.nodes[node2][node1] = weight;
    }

    getNodes() {
      return this.nodes;
    }
  }

  type CollectionType = [string, number];

  class PriorityQueue {
    collection: CollectionType[];
    constructor() {
      this.collection = [];
    }

    enqueue(element: [string, number]) {
      if (this.isEmpty()) {
        this.collection.push(element);
      } else {
        let added = false;
        for (let i = 0; i < this.collection.length; i += 1) {
          if (element[1] < this.collection[i][1]) {
            this.collection.splice(i, 0, element);
            added = true;
            return;
          }
        }
        if (!added) {
          this.collection.push(element);
        }
      }
    }

    dequeue() {
      return this.collection.shift();
    }

    isEmpty() {
      return this.collection.length === 0;
    }
  }

  function dijkstra(graph: Graph, startNode: string) {
    const distance: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const visited: Record<string, boolean> = {};
    const pq = new PriorityQueue();

    for (let node in graph.nodes) {
      distance[node] = Infinity;
      previous[node] = null;
      visited[node] = false;
    }

    distance[startNode] = 0;
    pq.enqueue([startNode, 0]);

    while (!pq.isEmpty()) {
      const [currentNode, currentDistance] = pq.dequeue() as CollectionType;
      if (visited[currentNode]) continue;

      visited[currentNode] = true;

      for (const neighbor in graph.nodes[currentNode]) {
        if (!visited[neighbor]) {
          const newDistance =
            currentDistance + graph.nodes[currentNode][neighbor];
          if (newDistance < distance[neighbor]) {
            distance[neighbor] = newDistance;
            previous[neighbor] = currentNode;
            pq.enqueue([neighbor, newDistance]);
          }
        }
      }
    }

    return { distances: distance, previous: previous };
  }

  function getShortestPath(
    previous: Record<string, string | null>,
    endNode: string
  ): string[] {
    const path: string[] = [];
    let currentNode = endNode;

    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous[currentNode] as string;
    }

    return path;
  }

  const graph = new Graph();
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");

  graph.addEdge("A", "B", 1);
  graph.addEdge("A", "C", 4);
  graph.addEdge("B", "C", 2);
  graph.addEdge("B", "D", 5);
  graph.addEdge("C", "D", 1);

  const { distances, previous } = dijkstra(graph, "A");
  console.log("Distances:", distances);
  console.log("Previous nodes:", previous);

  for (const node in distances) {
    console.log(`Shortest path to ${node}:`, getShortestPath(previous, node));
  }
})();
