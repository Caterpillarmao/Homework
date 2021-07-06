let num = 99;

function display() {
  num = setTimeout(countDown, 1000);
}

function countDown() {
  for (let i = 99; i >= 0; i--) {
    num = i;
  }
}
