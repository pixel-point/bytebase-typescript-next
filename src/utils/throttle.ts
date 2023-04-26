type ThrottledFunction<T extends any[]> = (this: void, ...args: T) => void;

function throttle<T extends any[]>(
  callback: ThrottledFunction<T>,
  limit: number,
): ThrottledFunction<T> {
  let waiting = false;
  return function (this: void, ...args: T) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

export default throttle;
