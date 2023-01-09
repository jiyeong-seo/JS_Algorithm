function solution(n, arr1, arr2) {
  let answer = [];

  let row = arr1.map((item) => item.toString(2));
  row.forEach((item, i) => {
    if (row[i].length < n) {
      row[i] = "0".repeat(n - row[i].length) + row[i];
    }
  });

  let col = arr2.map((item) => item.toString(2));
  col.forEach((item, i) => {
    if (col[i].length < n) {
      col[i] = "0".repeat(n - col[i].length) + col[i];
    }
  });

  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      if (row[i][j] === "1" || col[i][j] === "1") {
        result += "#";
      } else if (row[i][j] === "0" && col[i][j] === "0") {
        result += " ";
      }
    }
    answer.push(result);
  }
  return answer;
}

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
