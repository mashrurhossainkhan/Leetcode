var trapRainWater = function (heightMap) {
  const m = heightMap.length,
    n = heightMap[0].length;
  if (m < 3 || n < 3) return 0; // No water can be trapped if dimensions are too small

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // Right, Left, Down, Up
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const minHeap = new MinHeap();

  // Add all boundary cells to the min-heap and mark them as visited
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        minHeap.push([heightMap[i][j], i, j]);
        visited[i][j] = true;
      }
    }
  }

  let water = 0;

  while (minHeap.size() > 0) {
    const [height, x, y] = minHeap.pop(); // Extract the smallest height cell

    for (const [dx, dy] of directions) {
      const nx = x + dx,
        ny = y + dy;
      console.log(dx);
      console.log(dy);

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;

        // Calculate water trapped if the cell is lower than the current height
        water += Math.max(0, height - heightMap[nx][ny]);

        // Push the neighbor with the updated height into the heap
        minHeap.push([Math.max(height, heightMap[nx][ny]), nx, ny]);
      }
    }
  }

  return water;
};

// Min-Heap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return top;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx][0] >= this.heap[parentIdx][0]) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;

      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx][0] < element[0]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (
          (swap === null && this.heap[rightChildIdx][0] < element[0]) ||
          (swap !== null &&
            this.heap[rightChildIdx][0] < this.heap[leftChildIdx][0])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

const heightMap1 = [
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1],
];
console.log('ans: ' + trapRainWater(heightMap1)); // Output: 4

const heightMap2 = [
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3],
];
console.log('ans: ' + trapRainWater(heightMap2)); // Output: 10
