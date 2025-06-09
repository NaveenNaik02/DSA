class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value!;
      this.cache.delete(lruKey);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // returns 1
lRUCache.put(3, 3); // evicts key 2
console.log(lRUCache.get(2)); // returns -1
lRUCache.put(4, 4); // evicts key 1
console.log(lRUCache.get(1)); // returns -1
console.log(lRUCache.get(3)); // returns 3
console.log(lRUCache.get(4)); // returns 4
