// 문제 설명 https://school.programmers.co.kr/learn/courses/30/lessons/12928
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 입출력 예
// n	return
// 12	28
// 5	6

function solution(n) {
    var answer = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i !== 0) continue // continue는 if문 조건이 안 맞는 값들을 나타낸다 => 지금 n나머지 i가 0인것들을 뽑아라 (!) 이게 있으니깐. 예시를 들면 12%i === 0이면 0,5,7,8,9,10,11인데 이것은 나머지가 있는 숫자들임 
        answer += i;
    }
    return answer;
}

