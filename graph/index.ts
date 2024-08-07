class Graph<T extends number | string> {
  adjacencyList: Record<T, Array<T>>;
  constructor() {
    this.adjacencyList = {} as Record<T, Array<T>>;
  }

  addVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1: T, v2: T) {
    this.addVertex(v1);
    this.addVertex(v2);
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
    }

    if (!this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1: T, v2: T) {
    if (this.adjacencyList[v1]) {
      const v1List = this.adjacencyList[v1].filter((vertex) => vertex !== v2);
      this.adjacencyList[v1] = v1List;
    }
    if (this.adjacencyList[v2]) {
      const v2List = this.adjacencyList[v2].filter((vertex) => vertex !== v1);
      this.adjacencyList[v2] = v2List;
    }
  }

  removeVertex(vertex: T) {
    if (!this.adjacencyList[vertex]) return undefined;
    const vertexList = [...this.adjacencyList[vertex]];
    vertexList.forEach((item) => this.removeEdge(vertex, item));
    delete this.adjacencyList[vertex];
  }

  DFS(start: T) {
    const result: T[] = [];
    const visited: Record<T, boolean> = {} as Record<T, boolean>;
    (function dfs(this: Graph<T>, vertex: T) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs.call(this, neighbor);
        }
      });
    }).call(this, start);
    return result;
  }

  DFSIterative(start: T) {
    const stack: T[] = [start];
    const result: T[] = [];
    const visited: Record<T, boolean> = {} as Record<T, boolean>;
    while (stack.length) {
      const currentVertex = stack.pop() as T;
      result.push(currentVertex);
      visited[currentVertex] = true;
      this.adjacencyList[currentVertex]?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start: T) {
    const queue: T[] = [start];
    const result: T[] = [];
    const visited: Record<T, boolean> = {} as Record<T, boolean>;
    while (queue.length) {
      const currentVertex = queue.shift() as T;
      result.push(currentVertex);
      visited[currentVertex] = true;
      this.adjacencyList[currentVertex]?.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph<string>();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
console.log(graph.BFS("A"));
