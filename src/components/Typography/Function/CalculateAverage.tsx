function calculateAverage(arr: number[]): number {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

console.log(calculateAverage);
