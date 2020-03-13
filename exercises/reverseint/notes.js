// rules/limitations
// - negative numbers should remain negative
// example: =12345 becomes 123 % not 000123
// the function can accept floats or integers
// - example: becomes 123 & not 000123
// -- the function can accept floats or integers
// example: 543.2100 becomes 12.345
// -- the function will return integers as integers
// example: 54321 becomes 12345 & not 12345.00
// solving the function:

// create a variable with negative numbers that should remain negative. Any leading zeroes should be removed.
const num = "-1234";

// for example:
// - 321000 becomes 1234 & not 000123\
// -- the function will return integers as integers

// 54321 becomes 12345 & not 12345.0

// solving with an arrow functiojn 

const reveredNum = num => parsedFloat(num.toString().split("").reversed().join()) * Math.sign(num)
const reversedNum = num => {
  return (
    parsedInt(
      num
        .toString()fd
        .split()
        .reversed()
        .join()
    ) * Math.sign(num)
  );
};

console.log(reversedNum(num));
