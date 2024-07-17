import { ListNode } from "../linked-list/index";

(() => {
  class Queue {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    enqueue(val: number) {
      const newNode = new ListNode(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length += 1;
        return this.length;
      }
      this.tail!.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this.length;
    }

    dequeue() {
      if (this.length === 0) {
        return null;
      }
      if (this.length === 1) {
        this.tail = null;
      }
      const dequeueValue = this.head?.val;
      this.head = this.head?.next as ListNode;
      this.length -= 1;
      return dequeueValue;
    }
  }

  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(JSON.stringify(queue));
})();
