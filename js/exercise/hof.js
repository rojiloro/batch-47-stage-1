// foreach
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  let number = item * 2;
  console.log(number);
});

// map
const arr2 = [1, 2, 3, 4, 5];
const doubled = arr2.map((item) => {
  return item * 2;
});
console.log(doubled);

// filter
const arr3 = [1, 2, 3, 4, 5];
const eventNumber = arr3.filter(function (item) {
  return item % 2 == 0;
});

console.log(eventNumber);

// reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
  return total + item;
});
console.log(sum);

const jumlah = [1, 2, 3, 4, 5];
const selingkuhan = jumlah.reduce((total, item) => {
  return total + item;
}, 3);
console.log(selingkuhan);
