// nums is the input array. k is how many distinct values to return.
function topKFrequent(nums, k) {
  // Each map key is a number, and its value is how often that number appears.
  const counts = new Map();
  // Track the largest count so we know where to start the bucket scan.
  let maxFrequency = 0;

  // Visit every number in the input.
  console.log('\n1. Count the numbers');
  for (const num of nums) {
    // Use zero if the number is new (??), then count this occurrence.
    const frequency = (counts.get(num) ?? 0) + 1;
    // Save the updated count for this number.
    counts.set(num, frequency);
    // Keep the larger of this count and the previous maximum.
    maxFrequency = Math.max(maxFrequency, frequency);
    console.log(
      `Read ${num} → count ${frequency}, highest count ${maxFrequency}`,
    );
  }
  console.log('Final counts:', counts);

  // If we need every distinct value, the map keys already give us the answer.
  console.log(
    `\n2. Do we need all ${counts.size} distinct numbers? ${k === counts.size}`,
  );
  if (k === counts.size) {
    return Array.from(counts.keys());
  }

  // The index is the frequency. Index 0 is unused, so allow maxFrequency + 1 slots.
  console.log('\n3. Group numbers by frequency');
  const buckets = new Array(maxFrequency + 1);
  // Each map entry yields a number and its final count.
  for (const [num, frequency] of counts) {
    // Create an empty list if this bucket is missing (??=), or reuse its list.
    const bucket = (buckets[frequency] ??= []);
    // Group this number with the others that appear just as often.
    bucket.push(num);
    console.log(`Bucket ${frequency} after adding ${num}:`, bucket);
  }

  // Collect the answer, starting with the most frequent values.
  console.log('\n4. Scan buckets from highest frequency to lowest');
  const result = [];
  for (let frequency = maxFrequency; frequency > 0; frequency--) {
    // Get the numbers with this frequency and skip the slot if it is empty.
    const bucket = buckets[frequency];
    console.log(`Bucket ${frequency}:`, bucket ?? '(empty)');
    if (!bucket) continue;

    // Add each number from this bucket until we have exactly k values.
    for (const num of bucket) {
      result.push(num);
      console.log(`Added ${num}. Result so far:`, result);
      if (result.length === k) return result;
    }
  }
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log('Input:', nums, 'k =', k);
const answer = topKFrequent(nums, k);
console.log('\nFinal answer:', answer);
