import { LinkedList, ListNode } from "./index";
(() => {
  class ExtendedLinkedList extends LinkedList {
    constructor() {
      super();
    }

    rotateRight(k: number): ListNode | null {
      k = k % this.length;
      if (this.length === 0 || this.length === 1 || k === 0) {
        return this.head;
      }

      let currentNode = this.head;
      while (currentNode?.next) {
        currentNode = currentNode.next;
      }
      currentNode!.next = this.head;
      let newTail = currentNode;
      let stepsToNewHead = this.length - k;
      while (stepsToNewHead > 0) {
        newTail = newTail!.next;
        stepsToNewHead -= 1;
      }
      const newHead = newTail!.next;
      newTail!.next = null;
      return newHead;
    }
  }
  const linkedList = new ExtendedLinkedList();
  linkedList.addMultipleNode([1, 2, 3, 4, 5]);
  console.log(JSON.stringify(linkedList.rotateRight(2)));
})();
