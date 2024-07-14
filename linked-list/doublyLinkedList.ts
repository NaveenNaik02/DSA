(() => {
  class ListNode {
    val: number;
    previous: ListNode | null;
    next: ListNode | null;
    constructor(
      val: number,
      previous: ListNode | null = null,
      next: ListNode | null = null
    ) {
      this.val = val;
      this.previous = previous;
      this.next = next;
    }
  }

  class DoublyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val: number) {
      const newNode = new ListNode(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let lastNode = this.tail;
        this.tail = newNode;
        newNode.previous = lastNode;
        lastNode!.next = newNode;
      }
      this.length += 1;
      return this;
    }

    pop() {
      if (this.length === 0) {
        return "list is empty";
      }
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return this;
      }
      const currentTail = this.tail?.previous as ListNode;
      currentTail.next = null;
      this.tail = currentTail;
      this.length -= 1;
      return this;
    }

    printHead() {
      let currentNode = this.head;
      const arr: number[] = [];
      while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
      }
      return arr;
    }

    printTail() {
      let currentNode = this.tail;
      const arr: number[] = [];
      while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.previous;
      }
      return arr;
    }

    removeVal(val: number) {
      if (this.length === 0) {
        return `list is empty`;
      }

      //check if the head node has the node to be removed
      if (this.head?.val === val) {
        this.length -= 1;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
          return this;
        }
        this.head = this.head.next;
        this.head!.previous = null;
        return this;
      }

      //check if the tail node has the value to be removed
      if (this.tail?.val === val) {
        this.tail = this.tail.previous;
        this.tail!.next = null;
        this.length -= 1;
        return this;
      }

      let currentNode = this.head;
      while (currentNode && currentNode.val !== val) {
        currentNode = currentNode?.next as ListNode;
      }

      // value is not found inside the list
      if (!currentNode) {
        return `cannot find the node with value ${val}`;
      }

      const previousNode = currentNode.previous;
      const nextNode = currentNode.next;
      previousNode!.next = nextNode;
      nextNode!.previous = previousNode;
      this.length -= 1;
      return this;
    }

    set(val: number, index: number) {
      if (index < 0 || index > this.length - 1) {
        return `please provide the index in the range of [0,${
          this.length - 1
        }]`;
      }

      const newNode = new ListNode(val);
      if (index === 0 && this.head) {
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.length += 1;
        return this;
      }

      if (index === this.length - 1 && this.tail) {
        // pushing before tail;
        const previousNode = this.tail.previous;
        this.tail.previous = newNode;
        newNode.next = this.tail;
        newNode.previous = previousNode;
        previousNode!.next = newNode;
        this.length += 1;
        return this;
      }

      const mid = Math.floor(this.length / 2);
      const isFromHead = index <= mid ? true : false;
      let currentNode: ListNode | null;
      if (isFromHead) {
        currentNode = this.head;
        while (index > 1) {
          currentNode = currentNode?.next as ListNode;
          index -= 1;
        }
        const nextNode = currentNode?.next;
        newNode.next = nextNode as ListNode;
        nextNode!.previous = newNode;
        currentNode!.next = newNode;
        newNode.previous = currentNode;
      } else {
        currentNode = this.tail;
        while (index > 1) {
          currentNode = currentNode?.previous as ListNode;
          index -= 1;
        }
        newNode.previous = (currentNode?.previous as ListNode) || null;
        currentNode!.previous = newNode;
        newNode.next = currentNode;
      }
      this.length += 1;
      return this;
    }

    reverse() {
      if (this.length === 0 || this.length === 1) {
        return this;
      }

      let currentNode = this.head;
      let previousNode: ListNode | null = null;
      this.tail = currentNode;
      while (currentNode) {
        previousNode = currentNode.previous;
        currentNode.previous = currentNode.next;
        currentNode.next = previousNode;

        currentNode = currentNode.previous;
      }
      this.head = previousNode?.previous as ListNode;
      return this;
    }
  }
})();
