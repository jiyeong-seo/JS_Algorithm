function solution(s) {
  let answer = s
    .toLowerCase()
    .split(" ")
    .map((item) => (item[0] ? item[0].toUpperCase() + item.substring(1) : ""))
    .join(" ");

  return answer;
}

solution("3people  unFollowed me");
