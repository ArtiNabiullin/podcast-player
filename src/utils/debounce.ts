// Функция для дебаунса

export function debounce<T extends unknown>(
  callback: () => void,
  delay: number,
) {
  let timer: number;

  return (...args: T) => {
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fn = debounce(() => {
  console.log("Hello");
}, 500);

fn();
