/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const lastSeen = new Map(); //hashmap
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) { //when right == 1
    const char = s[right]; // if s= pwwkew (step1: char = p, step2: char = w)

    // If we have seen this character inside the current window,
    // move the left side just past its previous position.
    console.log("when right = " + right + " and lastSeen.has(char) = " + lastSeen.has(char))
    console.log("when right = " + right + " and lastSeen.get(char) = " + lastSeen.get(char))
    console.log("when right = " + right + " and left= " + left)
    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right); //(p, 0)
    maxLength = Math.max(maxLength, right - left + 1); //0
  }

  return maxLength;
};


lengthOfLongestSubstring("pwwpw")