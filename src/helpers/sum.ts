export function sum(a: number, b: number): number {
  return a + b;
}

export const addArray = (arr: number[]) => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
