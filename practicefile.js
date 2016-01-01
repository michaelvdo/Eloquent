function power(base, exponent) {
  if (typeof exponent === 'undefined')
    exponent = 2;

  if (exponent === 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8
