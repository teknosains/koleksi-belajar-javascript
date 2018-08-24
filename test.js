function build(n) {
  let x = '';
  for(let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      if (j > i) {
        x +=' ';
      } else {
        x += '*';
      }
    }
    x += '\n';
  }

  return x;
}

console.log(build(4));