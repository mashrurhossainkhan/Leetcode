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
