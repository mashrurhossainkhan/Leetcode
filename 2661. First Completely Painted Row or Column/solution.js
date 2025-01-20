function firstCompleteIndex(arr, mat) {
  const m = mat.length; // Number of rows
  const n = mat[0].length; // Number of columns

  // Step 1: Pre-process positions of elements in mat
  const positionMap = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      positionMap.set(mat[i][j], [i, j]);
    }
  }

  console.log(positionMap);
  // Step 2: Initialize row and column frequencies
  const rowCount = Array(m).fill(0);
  const colCount = Array(n).fill(0);

  // Step 3: Traverse the arr and update frequencies
  for (let i = 0; i < arr.length; i++) {
    const [row, col] = positionMap.get(arr[i]);

    rowCount[row]++;
    colCount[col]++;

    // Step 4: Check if a row or column is fully painted
    if (rowCount[row] === n || colCount[col] === m) {
      return i; // Return the index where it happens
    }
  }

  return -1; // Should never reach here based on constraints
}

// Example 1
console.log(
  firstCompleteIndex(
    [1, 3, 4, 2],
    [
      [1, 4],
      [2, 3],
    ]
  )
); // Output: 2

// Example 2
console.log(
  firstCompleteIndex(
    [2, 8, 7, 4, 1, 3, 5, 6, 9],
    [
      [3, 2, 5],
      [1, 4, 6],
      [8, 7, 9],
    ]
  )
); // Output: 3
