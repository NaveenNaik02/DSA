(() => {
  type ValidDataType = string | number;
  class ListNode<T extends ValidDataType> {
    val: T;
    next: ListNode<T> | null;
    constructor(val: T, next: ListNode<T> | null = null) {
      this.val = val;
      this.next = next;
    }
  }

  class LinkedList<T extends ValidDataType> {
    head: ListNode<T> | null;
    length: number;
    constructor() {
      this.head = null;
      this.length = 0;
    }

    push(val: T): ListNode<T> | null {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode;
        this.length += 1;
        return this.head;
      }
      let currentNode = this.head;
      while (currentNode?.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.length += 1;
      return this.head;
    }

    addMultipleNodes(arr: T[]) {
      arr.forEach((val) => this.push(val));
    }

    pop(): T | undefined {
      if (this.head === null) {
        return undefined;
      }

      if (this.length === 1) {
        const nodeValue = this.head.val;
        this.head = null;
        this.length = 0;
        return nodeValue;
      }

      let currentNode = this.head;
      let previousNode: ListNode<T> | null = null;
      while (currentNode?.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode!.next = null;
      this.length -= 1;
      return currentNode.val;
    }

    getNodeAt(index: number) {
      if (this.head === null) {
        return "cannot get value from empty list";
      }
      if (index < 0 || index > this.length - 1) {
        return `index should be in the range [0,${this.length - 1}]`;
      }
      if (index === 0) {
        return this.head.val;
      }
      let currentNode = this.head;
      while (index > 0 && currentNode.next) {
        currentNode = currentNode.next;
        index -= 1;
      }
      return currentNode.val;
    }

    removeAt(index: number) {
      if (this.head === null) {
        return "cannot get value from empty list";
      }
      if (index < 0 || index > this.length - 1) {
        return `index should be in the range [0,${this.length - 1}]`;
      }

      if (index === 0) {
        const removedNode = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        return removedNode;
      }

      let currentNode: ListNode<T> = this.head;
      let previousNode: ListNode<T> | null = null;
      while (index > 0 && currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index -= 1;
      }
      const removedNode = currentNode.val;
      previousNode && (previousNode.next = currentNode.next);
      this.length -= 1;
      return removedNode;
    }

    removeNode(val: number) {
      if (this.head === null) {
        return undefined;
      }
      if (this.head.val === val) {
        const removedNode = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        return removedNode;
      }
      let currentNode: ListNode<T> | null = this.head;
      let previousNode: ListNode<T> | null = null;
      while (currentNode && currentNode.val !== val) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode?.val === val && previousNode) {
        previousNode.next = currentNode.next;
        this.length -= 1;
        return currentNode.val;
      }
      return undefined;
    }

    insertAt(index: number, val: T) {
      if (index > this.length) {
        return `please provide the index in the range [0, ${this.length}]`;
      }
      const newNode = new ListNode(val);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this.head;
      }
      let currentNode = this.head;
      let previousNode: ListNode<T> | null = null;
      while (currentNode && index > 0) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index -= 1;
      }
      newNode.next = currentNode;
      previousNode && (previousNode.next = newNode);
      this.length += 1;
      return this.head;
    }

    cloneAndReverseList() {
      if (this.head === null) return undefined;
      if (this.length === 1) return this.head;
      return this.#cloneAndReverseListHelper(this.head, null);
    }

    #cloneAndReverseListHelper(
      node: ListNode<T>,
      previousNode: ListNode<T> | null
    ): ListNode<T> {
      const newNode = new ListNode(node.val, previousNode);
      if (node.next) {
        return this.#cloneAndReverseListHelper(node.next, newNode);
      }
      return newNode;
    }

    reverse() {
      if (this.head === null) return undefined;
      if (this.length === 1) return this.head;

      let currentNode: ListNode<T> | null = this.head;
      let previousNode: ListNode<T> | null = null;
      while (currentNode) {
        const nextNode: ListNode<T> | null = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
      }
      this.head = previousNode;
      return previousNode;
    }
  }

  const linkedList = new LinkedList<number>();
  const arr = [1, 2, 3, 4, 5];
  linkedList.addMultipleNodes(arr);
  console.log(JSON.stringify(linkedList));
})();
