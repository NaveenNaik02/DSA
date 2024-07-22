export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data: number): ListNode | null {
    const newNode = new ListNode(data);
    if (this.length === 0) {
      this.head = newNode;
      this.length += 1;
      return this.head;
    }
    let currentNode = this.head;
    while (currentNode && currentNode.next !== null) {
      currentNode = currentNode?.next;
    }
    currentNode!.next = newNode;
    this.length += 1;
    return this.head;
  }

  addMultipleNode(arr: number[]) {
    arr.forEach((val) => {
      this.add(val);
    });
    return this;
  }
}
