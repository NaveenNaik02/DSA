import { ListNode, LinkedList } from "./index";

(() => {
  class ExtendedLinkedList extends LinkedList {
    constructor() {
      super();
    }

    getNodeAt(index: number) {
      if (index < 0 || index > this.length - 1) {
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
      if (index < 0 || index > linkedList.length - 1) {
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
      this.length -= 1;
      return currentNode!.val;
    }

    removeNode(data: number) {
      let currentNode = this.head;
      let previousNode: ListNode | null = null;
      while (currentNode !== null) {
        if (currentNode.val === data) {
          if (previousNode) {
            previousNode.next = currentNode.next;
          } else {
            this.head = currentNode.next;
          }
          this.length -= 1;
          return currentNode.val;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return `cannot find the node with data ${data}`;
    }

    insertAt(index: number, data: number) {
      if (index < 0 || index > this.length) {
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
      this.length += 1;
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
      const newNode = new ListNode(node.val, prevNode);
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
  const linkedList = new ExtendedLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  console.log(JSON.stringify(linkedList.reverseList()));
})();
