function solution(arr, n) {
  let duplicateValue = [];
  let answer = [];
  arr.sort().forEach((item, index) => {
    if (item == arr[index + 1]) duplicateValue.push(item);
    else if (item !== arr[index + 1]) answer.push(item);
  });

  answer = answer
    .filter((item) => !duplicateValue.includes(item))
    .sort((a, b) => {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
      return 0;
    });

  return answer;
}

console.log(
  solution(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"], 2)
);
