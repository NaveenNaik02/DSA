import { ListNode, LinkedList } from "./index";

(() => {
  class ExtendedLinkedList extends LinkedList {
    constructor() {
      super();
    }
  }

  function mergeList(l1: ListNode | null, l2: ListNode | null) {
    const dummyNode = new ListNode(-Infinity);
    let previousNode: ListNode | null = dummyNode;
    while (l1?.val && l2?.val) {
      if (l1.val <= l2.val) {
        previousNode!.next = l1;
        previousNode = previousNode.next;
        l1 = l1.next;
      } else {
        previousNode!.next = l2;
        previousNode = previousNode.next;
        l2 = l2.next;
      }
      if (l1) {
        previousNode.next = l1;
      }
      if (l2) {
        previousNode.next = l2;
      }
    }
    return dummyNode.next;
  }

  const linkedList = new ExtendedLinkedList();
  linkedList.addMultipleNode([1]);
  const linkedList2 = new ExtendedLinkedList();
  linkedList2.addMultipleNode([-1, 2, 4]);
  console.log(JSON.stringify(mergeList(linkedList.head, linkedList2.head)));
})();
