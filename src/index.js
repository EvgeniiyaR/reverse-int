module.exports = function reverse (n) {
  let reverse = '';
  n = Math.abs(n);
  for (let i = (String(n)).length - 1; i >= 0; i--) {
	reverse += (String(n))[i];
  }
  return reverse;
}
