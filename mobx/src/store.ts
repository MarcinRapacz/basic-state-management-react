import { makeAutoObservable } from "mobx";

class Counter {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  incrementByAmount(count: number) {
    this.counter += count;
  }
}

const store = new Counter();

export default store;
