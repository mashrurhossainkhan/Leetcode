# 347. Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return the `k` distinct values that occur most often in `nums`. You may return them in any order.

## Examples

| Input | Output |
| --- | --- |
| `nums = [1, 1, 1, 2, 2, 3], k = 2` | `[1, 2]` |
| `nums = [1], k = 1` | `[1]` |
| `nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2], k = 2` | `[1, 2]` |

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <=` the number of distinct values in `nums`.
- The set of `k` values in the answer is guaranteed to be unique.

## Follow-up

Design an algorithm that runs in better than `O(n log n)` time, where `n` is the length of `nums`.
