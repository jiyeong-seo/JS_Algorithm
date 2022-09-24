/*
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant  	   completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

// concat으로 인자로 전달받은 두 배열 병합
// 병합된 배열에 filter 사용
// filter로 인해 순환하는 원소를 || or 연산자를 사용하여 연산
// or 연산자 좌항에 들어가는 참여자 배열에 filter로 인해 순환하는 원소가 있다면 -> false로 값을 평가
// false로 평가된 배열과 논리 연산자로 비교되어지는 우항의 완주자 배열에 filter로 인해 순환하는 값이 있다면
// => 참여자이며 완주자이기때문에 완주하지 못한 사람을 담는 새로운 배열의 원소로 추가되지 않는다.
// (or 연산의 결과는 false로 평가되어 filter로 인해 리턴될 새로운 배열의 원소로 추가되지 않는다.)
// 논리 연산자 우항의 완주자 배열에 원소가 없다면 true로 평가하여 새로운 배열에 원소로 추가

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
