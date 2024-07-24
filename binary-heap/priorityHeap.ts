(() => {
  class Node {
    value: string;
    priority: number;
    constructor(value: string, priority: number) {
      this.value = value;
      this.priority = priority;
    }
  }

  class PriorityHeap {
    priorityQueue: Node[];
    constructor() {
      this.priorityQueue = [];
    }

    enqueue(value: string, priority: number) {
      const newNode = new Node(value, priority);
      this.priorityQueue.push(newNode);
      this.#bubbleUp();
      return this.priorityQueue;
    }

    #bubbleUp() {
      let index = this.priorityQueue.length - 1;
      const newNode = this.priorityQueue[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parentNode = this.priorityQueue[parentIndex];
        if (newNode.priority > parentNode.priority) break;
        this.priorityQueue[index] = parentNode;
        this.priorityQueue[parentIndex] = newNode;
        index = parentIndex;
      }
    }

    dequeue() {
      const length = this.priorityQueue.length;
      if (length === 0) return undefined;
      if (length === 1) {
        return this.priorityQueue.pop();
      }

      const maxPriorityElement = this.priorityQueue[0];
      this.priorityQueue[0] = this.priorityQueue.pop() as Node;
      this.#bubbleDown();
      return maxPriorityElement;
    }

    #bubbleDown() {
      const element = this.priorityQueue[0];
      const length = this.priorityQueue.length;
      let index = 0;
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild = this.priorityQueue[leftChildIndex];
        let rightChild = this.priorityQueue[rightChildIndex];
        let swapIndex: number | null = null;

        if (leftChildIndex < length && leftChild.priority < element.priority) {
          swapIndex = leftChildIndex;
        }
        if (
          rightChildIndex < length &&
          ((swapIndex === null && rightChild.priority < element.priority) ||
            (swapIndex !== null && rightChild.priority < leftChild.priority))
        ) {
          swapIndex = rightChildIndex;
        }
        if (swapIndex === null) break;
        this.priorityQueue[index] = this.priorityQueue[swapIndex];
        this.priorityQueue[swapIndex] = element;
        index = swapIndex;
      }
    }
  }

  const priorityHeap = new PriorityHeap();
  priorityHeap.enqueue("nine", 9);
  priorityHeap.enqueue("eleven", 11);
  priorityHeap.enqueue("thirteen", 13);
  priorityHeap.enqueue("fourteen", 14);
  priorityHeap.enqueue("two", 2);
  priorityHeap.enqueue("five", 5);
  priorityHeap.enqueue("seven", 7);
  console.log(JSON.stringify(priorityHeap));
  console.log(priorityHeap.dequeue());
  priorityHeap.dequeue();
  console.log(JSON.stringify(priorityHeap));
})();
