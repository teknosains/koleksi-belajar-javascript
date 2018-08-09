let count = 1;
function counter() {
  let max = 1e4;
  do {
    count++;
    printit(count);
  } while (count % 1e2 != 0);

  if (count < max) {
    setTimeout(counter, 0);
  }
}

function printit(i) {
  console.log(i);
}

counter();