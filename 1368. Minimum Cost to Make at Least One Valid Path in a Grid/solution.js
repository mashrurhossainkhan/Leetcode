class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(cost, x, y) {
    this.heap.push([cost, x, y]);
    this._heapifyUp();
  }

  dequeue() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element[0] >= parent[0]) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  _heapifyDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let smallestIdx = idx;

      if (
        leftIdx < length &&
        this.heap[leftIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = leftIdx;
      }

      if (
        rightIdx < length &&
        this.heap[rightIdx][0] < this.heap[smallestIdx][0]
      ) {
        smallestIdx = rightIdx;
      }

      if (smallestIdx === idx) break;

      this.heap[idx] = this.heap[smallestIdx];
      idx = smallestIdx;
    }
    this.heap[idx] = element;
  }
}

function minCost(grid) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const directionMap = { 1: 0, 2: 1, 3: 2, 4: 3 };

  const pq = new PriorityQueue();
  const visited = Array.from({ length: m }, () => Array(n).fill(Infinity));
  visited[0][0] = 0;
  pq.enqueue(0, 0, 0);

  while (!pq.isEmpty()) {
    const [cost, x, y] = pq.dequeue();

    if (x === m - 1 && y === n - 1) {
      return cost;
    }

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        const newCost = cost + (i === directionMap[grid[x][y]] ? 0 : 1);

        if (newCost < visited[nx][ny]) {
          visited[nx][ny] = newCost;
          pq.enqueue(newCost, nx, ny);
        }
      }
    }
  }

  return -1;
}

// Example Usage
const grid1 = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
const grid2 = [
  [1, 1, 3],
  [3, 2, 2],
  [1, 1, 4],
];
const grid3 = [
  [
    [4, 3, 4, 3, 3, 3, 2, 3],
    [1, 2, 2, 3, 2, 2, 4, 1],
    [1, 3, 1, 2, 4, 1, 4, 2],
    [1, 1, 4, 2, 2, 2, 3, 3],
    [4, 3, 3, 1, 3, 4, 3, 1],
    [4, 4, 4, 2, 3, 2, 3, 1],
    [3, 3, 1, 3, 2, 2, 2, 3],
  ],
];

console.log(minCost(grid1)); // Output: 3
console.log(minCost(grid2)); // Output: 0
console.log(minCost(grid3)); // Output: 1
