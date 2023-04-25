const throttle = <T extends (...args: any[]) => void>(func: T, wait: number): T => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const throttledFunc = function (this: any, ...args: Parameters<T>) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeoutId = undefined;
      }, wait);
    }
  };

  return throttledFunc as T;
};

export default throttle;
