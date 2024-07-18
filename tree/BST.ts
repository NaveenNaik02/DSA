import { Node } from "./index";

(() => {
  class BinarySearchTree {
    root: Node | null;
    constructor() {
      this.root = null;
    }

    insert(data: number) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
        return this.root;
      }

      this.#insertNodeHelper(this.root, newNode);
      return this.root;
    }

    #insertNodeHelper(node: Node, newNode: Node) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        this.#insertNodeHelper(node.left, newNode);
        return;
      }
      if (node.right === null) {
        node.right = newNode;
        return;
      }
      this.#insertNodeHelper(node.right, newNode);
    }

    search(data: number): boolean {
      if (this.root === null) {
        return false;
      }
      return this.#searchHelper(this.root, data);
    }

    #searchHelper(node: Node | null, data: number): boolean {
      if (!node) return false;
      if (node.data === data) return true;

      if (data < node.data) return this.#searchHelper(node.left, data);
      return this.#searchHelper(node.right, data);
    }

    BFS() {
      if (this.root === null) return [];
      const queue = [this.root];
      const result: number[] = [];
      while (queue.length) {
        const node = queue.shift()!;
        result.push(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return result;
    }

    DFSPreOrder() {
      if (this.root === null) return [];
      const result: number[] = [];
      this.#preOrderHelper(this.root, result);
      return result;
    }

    #preOrderHelper(node: Node, result: number[]) {
      result.push(node.data);
      if (node.left) this.#preOrderHelper(node.left, result);
      if (node.right) this.#preOrderHelper(node.right, result);
    }

    DFSPostOrder() {
      if (this.root === null) return [];
      const result: number[] = [];
      this.#DFSPostOrderHelper(this.root, result);
      return result;
    }

    #DFSPostOrderHelper(node: Node, result: number[]) {
      if (node.left) this.#DFSPostOrderHelper(node.left, result);
      if (node.right) this.#DFSPostOrderHelper(node.right, result);
      result.push(node.data);
    }

    DFSInOrder() {
      if (this.root === null) return [];
      const result: number[] = [];
      this.#inOrderHelper(this.root, result);
      return result;
    }

    #inOrderHelper(node: Node, result: number[]) {
      if (node.left) this.#inOrderHelper(node.left, result);
      result.push(node.data);
      if (node.right) this.#inOrderHelper(node.right, result);
    }
  }

  const bst = new BinarySearchTree();
  const arr = [10, 5, 4, 6, 15, 12, 20];
  arr.forEach((item) => bst.insert(item));
})();
