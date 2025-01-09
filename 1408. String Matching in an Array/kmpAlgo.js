// Function to compute the LPS (Longest Prefix Suffix) array
function computeLPS(pattern) {
  const m = pattern.length;
  const lps = new Array(m).fill(0); // Initialize LPS array with zeros
  let length = 0; // Length of the current prefix suffix
  let i = 1; // Start from the second character

  /*
    pattern = ABABCABAB
    iterate: 0
    length = 0
    i = 3
    ABABCABAB
    lps: 0,0,1,0,0,0,0,0,0
  */
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

  /* 
ABABDABACDABABCABAB
ABABCABAB
  */
  console.log('text: ' + text + 'the text length: ' + n);
  console.log('pattern: ' + pattern + 'the pattern length : ' + m);
  while (i < n) {
    console.log(`Index for text : ${i} and text character ${text[i]}`);
    console.log(`Index for pattern : ${j} and pattern character ${pattern[j]}`);
    console.log(`result: ${result}`);
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      // A match is found
      result.push(i - j);
      j = lps[j - 1]; // Reset j using the LPS array
      console.log(`Reset j after a match is found: ${j}`);
    } else if (i < n && text[i] !== pattern[j]) {
      // Mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1];
        console.log(`Reset j Mismatch after j matches: ${j}`);
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example usage
const text = 'CABAB';
const pattern = 'BAB';

const matches = kmpSearch(text, pattern);
if (matches.length > 0) {
  console.log(`Pattern found at indices: ${matches}`);
} else {
  console.log('Pattern not found.');
}
