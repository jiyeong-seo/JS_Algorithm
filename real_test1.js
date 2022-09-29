function solution(arr1) {
  const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  /* filterdArr */
  // => numberArr의 원소들 중  arr1에 포함되지 않은 숫자를 원소로 가진 배열
  const filterdArr = numberArr
    .filter((item) => {
      return !arr1.includes(item);
    })
    .sort();
  let answer = 0;

  // 작은 값부터 큰 값까지 반복문을 돌리며 작은값부터 큰 값 사이의 값을 담은
  // 변수 i를 answer에 합한다.
  for (let i = filterdArr[0]; i <= filterdArr[1]; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution([1, 3, 5, 9, 2, 4, 8, 0]));
