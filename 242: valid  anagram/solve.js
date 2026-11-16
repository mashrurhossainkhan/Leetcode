var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) === -1) {
      return false;
    }

    t = t.replace(s[i], '');
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // Expected: true
console.log(isAnagram('rat', 'car')); // Expected: false
console.log(isAnagram('aacc', 'ccac')); // Expected: false
