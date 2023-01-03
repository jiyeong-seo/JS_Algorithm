function solution(s) {
  let arr = s
    .split(" ")
    .map((item) => parseInt(item))
    .sort();
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return min + " " + max;
}

console.log(solution("-1 -2 -3 -4"));
