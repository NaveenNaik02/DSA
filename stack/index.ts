import { ListNode } from "../linked-list";

(() => {
  class Stack {
    head: ListNode | null;
    length: number;
    constructor() {
      this.head = null;
      this.length = 0;
    }

    push(val: number) {
      const newNode = new ListNode(val);
      if (this.length === 0) {
        this.head = newNode;
        this.length += 1;
        return this.length;
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return this.length;
    }

    pop() {
      if (this.length === 0) {
        return null;
      }
      const popValue = this.head?.val;
      this.head = this.head?.next || null;
      this.length -= 1;
      return popValue;
    }
  }

  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(JSON.stringify(stack));
})();
