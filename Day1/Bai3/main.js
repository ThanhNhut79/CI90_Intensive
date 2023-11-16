function findNumber(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    counter[element] = (counter[element] || 0) + 1;
  }
  let mostNumber;
  let maxCount = 0;
  for (let element in counter) {
    if (counter[element] > maxCount) {
      maxCount = counter[element];
      mostNumber = element;
    }
  }
  return {
    element: mostNumber,
    count: maxCount,
  };
}
let arr = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let result = findNumber(arr);
console.log(
  "Number xuất hiện nhiều nhất là:",
  result.element,
  "        Số lần xuất hiện:",
  result.count
);
