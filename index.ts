type Executor<T> = (
  resolve: (value?: T) => void,
  reject: (reason?: any) => void
) => void;

type OnFulfilled<T, R> = ((value: T) => R | void) | undefined;
type OnRejected<R> = ((reason: any) => R | void) | undefined;

enum State {
  Pending,
  Fulfilled,
  Rejected,
}

function asap(fn: () => void) {
  if (typeof queueMicrotask === "function") queueMicrotask(fn);
  else setTimeout(fn, 0);
}

export class SimplePromise<T = any> {
  private state: State = State.Pending;
  private value: any = undefined;
  private onFulfilledQueue: Array<(v: any) => void> = [];
  private onRejectedQueue: Array<(r: any) => void> = [];

  constructor(executor: Executor<T>) {
    const resolve = (val?: T) => this.transition(State.Fulfilled, val);
    const reject = (reason?: any) => this.transition(State.Rejected, reason);

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  private transition(next: State, val: any) {
    if (this.state !== State.Pending) return;
    this.state = next;
    this.value = val;

    asap(() => {
      const queue = next === State.Fulfilled ? this.onFulfilledQueue : this.onRejectedQueue;
      queue.forEach(fn => fn(this.value));
      this.onFulfilledQueue = [];
      this.onRejectedQueue = [];
    });
  }

  then<R1 = T, R2 = never>(
    onFulfilled?: OnFulfilled<T, R1>,
    onRejected?: OnRejected<R2>
  ): SimplePromise<R1 | R2> {
    return new SimplePromise<R1 | R2>((resolve, reject) => {
      const handleFulfilled = (val: any) => {
        try {
          if (typeof onFulfilled === "function") {
            const res = onFulfilled(val);
            resolve(res as any);
          } else {
            resolve(val);
          }
        } catch (e) {
          reject(e);
        }
      };

      const handleRejected = (reason: any) => {
        try {
          if (typeof onRejected === "function") {
            const res = onRejected(reason);
            resolve(res as any);
          } else {
            reject(reason);
          }
        } catch (e) {
          reject(e);
        }
      };

      if (this.state === State.Pending) {
        this.onFulfilledQueue.push(handleFulfilled);
        this.onRejectedQueue.push(handleRejected);
      } else if (this.state === State.Fulfilled) {
        asap(() => handleFulfilled(this.value));
      } else {
        asap(() => handleRejected(this.value));
      }
    });
  }

  catch<R = never>(onRejected?: OnRejected<R>) {
    return this.then(undefined, onRejected);
  }

  // Optional minimal static helpers
  static resolve<T>(value?: T) {
    return new SimplePromise<T>((res) => res(value as T));
  }
  static reject<T = never>(reason?: any) {
    return new SimplePromise<T>((_, rej) => rej(reason));
  }
}

const p = new SimplePromise<string>((resolve, reject) => {
  setTimeout(() => resolve("done"), 100);
});

p.then(v => {
  console.log(v); // "done"
  return "next";
}).then(v => {
  console.log(v); // "next"
}).catch(err => {
  console.error("err", err);
});
