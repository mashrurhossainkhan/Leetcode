const counts = new Map([
  [3, 1],
  [1, 3],
  [2, 2],
]);
const k = 2;

const entries = [...counts]; // [[3, 1], [1, 3], [2, 2]]

entries.sort((a, b) => b[1] - a[1]); // [[1, 3], [2, 2], [3, 1]]

const result = entries
  .slice(0, k) // [[1, 3], [2, 2]]
  .map(([num]) => num); // [1, 2]

console.log(result);
