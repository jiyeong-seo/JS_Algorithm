function solution(n) {
  var answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += n[i] / n.length;
  }
  return answer;
}
