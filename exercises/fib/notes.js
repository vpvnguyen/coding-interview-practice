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

// another way using recursion
function fib2(n) {
  if (n == 1) return [0, 1];

  var arr = fib2(n - 1);
  arr.push(arr[n - 1] + arr[n - 2]);

  return arr;
}

// only print the number in the squence
// Simple iteration
function fib3(number) {
  var previous_first = 0,
    previous_second = 1,
    next = 1;

  for (var i = 2; i <= number; i++) {
    next = previous_first + previous_second;
    previous_first = previous_second;
    previous_second = next;
  }
  return next;
}

// Loop and array
function fib4(number) {
  var sequence = [1, 1];

  for (var i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence[number - 1];
}

// Recursion
function fib5(number) {
  if (number < 1) return 0;

  if (number <= 2) return 1;

  return fib5(number - 1) + fib5(number - 2);
}

// Hash and look up.
function fibonacci(number) {
  var sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  var numberZeroBased = number - 1;

  if (numberZeroBased > sequence.length)
    throw new Error("The number you provided is outside of the range");

  return sequence[numberZeroBased];
}

// generators
function* fibonacci(number) {
  var previous_first = 0,
    previous_second = 1,
    next = 1;

  while (true) {
    next = previous_first + previous_second;
    previous_first = previous_second;
    previous_second = next;

    yield next;
  }
}

console.log(fib(8));
console.log(fib2(8));
console.log(fib3(8));
console.log(fib4(8));
console.log(fib5(8));
