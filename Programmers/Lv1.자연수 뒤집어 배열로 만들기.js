// 문제 설명 https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 내 정답
function solution(n) {
    let arr = (n + "").split('').map(function (item) {
        return parseInt(item, 10);
    })
    var answer = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(arr[i])
    }
    return answer;
}

//다른 사람 풀이 
function solution(n) { return (n + "").split("").reverse().map(v => parseInt(v)) };
