function cantDig(n) {
  let count = 0;

  while (n > 1) {
    n = n / 10;
    count++;
  }

  return count;
}