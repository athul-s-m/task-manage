export const task = (desc, mode) => {
  const start = Date.now();
  const time = 3000;

  return new Promise((resolve) => {
    setTimeout(() => {
      const end = Date.now();
      const duration = end - start;
      resolve({ desc, duration, mode });
    }, time);
  });
};
