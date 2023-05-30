// cusom hof that return another function
function multiplyBy(n) {
  return function (x) {
    return x * n;
  };
}

// fil the parameter n
const doubled = multiplyBy(2);
// fill the parameter x
console.log(doubled(5));

// custom hof that implementt callback
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function logNumber(x) {
  console.log(`the number is ${x}`);
}

repeat(3, logNumber);
