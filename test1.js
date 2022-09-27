function solution(num) {
  let result = "";
  let acc = 0;
  let reverse = num.toString().split("").reverse();

  reverse.forEach((item) => (result += item + "+"));
  acc = reverse.reduce((acc, cur) => +acc + +cur, 0);

  return (result = result.replace(/\+$/g, `=${acc}`));
}

console.log(solution(718253));
