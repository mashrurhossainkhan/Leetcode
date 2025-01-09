var prefixCount = function (words, pref) {
  let count = 0;
  for (let word of words) {
    if (word.startsWith(pref)) {
      count += 1;
    }
  }
  return count;
};
