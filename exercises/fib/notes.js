// start function
// check if n is equal to 1
// is n === 1?
// - yes - return [0, 1] because you only want the first 2 of the sqeunce
// - no - add up to n sequences starting from [0, 1]

const fib = n => {
  if (n == 1) {
    return [0, 1];
  } else {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fib(8));
