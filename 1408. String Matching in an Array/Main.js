/**
 * @param {string[]} words
 * @return {string[]}
 */

// Function to compute the LPS (Longest Prefix Suffix) array
function computeLPS(pattern) {
  const m = pattern.length;
  const lps = new Array(m).fill(0); // Initialize LPS array with zeros
  let length = 0; // Length of the current prefix suffix
  let i = 1; // Start from the second character

  while (i < m) {
    //ABABCABAB
    if (pattern[i] === pattern[length]) {
      //B == A
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        // If mismatch, reset length to lps[length - 1]
        length = lps[length - 1];
      } else {
        // If no match, set lps[i] to 0 and move on
        lps[i] = 0; //0
        i++;
      }
    }
  }

  return lps;
}

// Function to search for the pattern in the text using KMP
function kmpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = computeLPS(pattern); // Precompute the LPS array // 0,0,1,2,0,1,2,3,4
  let i = 0; // Index for text
  let j = 0; // Index for pattern
  const result = []; // Store the starting indices of matches

  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      // A match is found
      result.push(i - j);
      j = lps[j - 1]; // Reset j using the LPS array
    } else if (i < n && text[i] !== pattern[j]) {
      // Mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

var stringMatching = function (words) {
  let text;
  let pattern;
  let results = new Set(); // Use a Set to store unique words

  // Sort the words array based on the length of each word (descending order)
  words.sort((a, b) => b.length - a.length);

  for (let i = 0; i < words.length; i++) {
    text = words[i];
    for (let j = i + 1; j < words.length; j++) {
      pattern = words[j];
      const matches = kmpSearch(text, pattern);
      if (matches.length > 0) {
        results.add(pattern); // Add pattern to the Set (duplicates automatically eliminated)
      }
    }
  }

  // Convert Set back to array and sort by length (ascending order)
  return Array.from(results).sort((a, b) => a.length - b.length);
};

let words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];

const check = stringMatching(words);

console.log(check);
