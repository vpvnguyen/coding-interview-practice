// start function
// check if n is equal to 1
// is n === 1?
// - yes - return [0, 1] because you only want the first 2 of the sqeunce
// - no - add up to n sequences starting from [0, 1]

const fib = n => {
  if (n == 1) return [0, 1];
  const s = fib(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);
  return s;
};

console.log(fib(8));

// another way using recursion
function fib2(n) {
  if (n == 1) return [0, 1];

  var arr = fib2(n - 1);
  arr.push(arr[n - 1] + arr[n - 2]);

  return arr;
}

console.log(fib2(8));
