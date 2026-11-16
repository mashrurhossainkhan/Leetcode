function build(str) {
  const stack = [];

  for (const ch of str) {
    if (ch === '#') {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

function backspaceCompare(s, t) {
  return build(s) === build(t);
}

console.log(backspaceCompare('ab#c', 'ad#c')); // Expected: true
console.log(backspaceCompare('ab##', 'c#d#')); // Expected: true
console.log(backspaceCompare('a#c', 'b')); // Expected: false
