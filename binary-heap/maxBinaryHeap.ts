(() => {
  class BinaryHeap {
    values: number[];
    constructor() {
      this.values = [41, 35, 33, 18, 27, 12];
    }

    insert(data: number) {
      this.values.push(data);
      this.#bubbleUp();
      return this.values;
    }

    #bubbleUp() {
      let index = this.values.length - 1;
      const element = this.values[index];
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (element <= parent) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }

    getMaxValue() {
      const length = this.values.length;
      if (length === 0) return undefined;
      if (length === 1) {
        return this.values.pop();
      }

      const maxValue = this.values[0];
      this.values[0] = this.values.pop() as number;
      this.#bubbleDown();
      return maxValue;
    }

    #bubbleDown() {
      let index = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild: number = -Infinity;
        let rightChild: number = -Infinity;
        let swapIndex: number | null = null;

        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild > element) {
            swapIndex = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swapIndex === null && rightChild > element) ||
            (swapIndex !== null && rightChild > leftChild)
          ) {
            swapIndex = rightChildIndex;
          }
        }
        if (swapIndex === null) break;
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = element;
        index = swapIndex;
      }
    }
  }

  const maxBinaryHeap = new BinaryHeap();
  console.log(maxBinaryHeap.getMaxValue());
  console.log(maxBinaryHeap.getMaxValue());
  console.log(maxBinaryHeap.values);
})();
