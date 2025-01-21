function gridGame(grid) {
  const n = grid[0].length;

  // Compute prefix sums for row 0 and row 1
  const prefixRow0 = Array(n).fill(0);
  const prefixRow1 = Array(n).fill(0);

  prefixRow0[0] = grid[0][0];
  prefixRow1[0] = grid[1][0];

  for (let i = 1; i < n; i++) {
    prefixRow0[i] = prefixRow0[i - 1] + grid[0][i];
    prefixRow1[i] = prefixRow1[i - 1] + grid[1][i];
    console.log(prefixRow0[i - 1]);
    //console.log(prefixRow1[i]);
  }

  // Iterate through all possible split points
  let result = Infinity;

  for (let c = 0; c < n; c++) {
    // Points left on Row 0 after column c
    const pointsRow0 = prefixRow0[n - 1] - prefixRow0[c];

    // Points left on Row 1 before column c
    const pointsRow1 = c > 0 ? prefixRow1[c - 1] : 0;

    // Max points the second robot can collect
    const secondRobotPoints = Math.max(pointsRow0, pointsRow1);

    // Minimize the max points for the second robot
    result = Math.min(result, secondRobotPoints);
  }

  return result;
}

const gridExp = [
  [2, 5, 4],
  [1, 5, 1],
];

console.log(gridGame(gridExp));
