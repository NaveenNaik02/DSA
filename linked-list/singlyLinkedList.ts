(() => {
  class ListNode {
    data: number;
    next: ListNode | null;
    constructor(data: number, next: ListNode | null = null) {
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    head: ListNode | null;
    size: number;
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(data: number) {
      const newNode = new ListNode(data);
      if (this.size === 0) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode && currentNode?.next !== null) {
          currentNode = currentNode?.next;
        }
        currentNode!.next = newNode;
      }
      this.size += 1;
    }

    getNodeAt(index: number) {
      if (index < 0 || index > this.size - 1) {
        return `cannot find node at ${index}`;
      } else {
        let currentNode = this.head;
        for (let i = 0; i < index && currentNode; i += 1) {
          currentNode = currentNode.next;
        }
        return currentNode;
      }
    }

    removeAt(index: number) {
      if (index < 0 || index > linkedList.size - 1) {
        return `cannot find node at ${index}`;
      }
      let currentNode = this.head;
      if (index === 0) {
        this.head = currentNode!.next;
      } else {
        let previousNode: ListNode | null;
        for (let i = 0; i < index; i += 1) {
          previousNode = currentNode;
          currentNode = currentNode!.next;
        }
        previousNode!.next = currentNode!.next;
      }
      this.size -= 1;
      return currentNode!.data;
    }

    removeNode(data: number) {
      let currentNode = this.head;
      let previousNode: ListNode | null = null;
      while (currentNode !== null) {
        if (currentNode.data === data) {
          if (previousNode) {
            previousNode.next = currentNode.next;
          } else {
            this.head = currentNode.next;
          }
          this.size -= 1;
          return currentNode.data;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return `cannot find the node with data ${data}`;
    }

    insertAt(index: number, data: number) {
      if (index < 0 || index > this.size) {
        return `cannot insert at ${index}`;
      }
      const newNode = new ListNode(data);
      let currentNode = this.head;
      if (index === 0) {
        newNode.next = currentNode;
        this.head = newNode;
      } else {
        var previousNode: ListNode | null = null;
        for (let i = 0; i < index; i += 1) {
          previousNode = currentNode;
          currentNode = currentNode!.next;
        }
      }
      newNode.next = currentNode;
      previousNode!.next = newNode;
      this.size += 1;
      return this;
    }

    //without recursion
    reverseList() {
      let currentNode = this.head;
      let previousNode: ListNode | null = null;
      while (currentNode) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
      return previousNode;
    }

    //using recursion
    #reverseNode(node: ListNode, prevNode: ListNode | null = null): ListNode {
      const newNode = new ListNode(node.data, prevNode);
      if (node.next) {
        return this.#reverseNode(node.next, newNode);
      }
      return newNode;
    }

    reverseLinkedList() {
      if (this.head) {
        return this.#reverseNode(this.head, null);
      }
      return this;
    }
  }
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  console.log(JSON.stringify(linkedList.reverseList()));
})();
