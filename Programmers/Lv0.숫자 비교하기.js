// 문제 설명 https://school.programmers.co.kr/learn/courses/30/lessons/120807
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 입출력 예
// num1	num2	result
// 2	3	-1
// 11	11	1
// 7	99	-1


function solution(num1, num2) {
    var answer;
    if (num1 === num2) {
        answer = 1
    }
    else {
        answer = -1
    };

    return answer;
}

solution(2, 3)

// 아래와 같이 푸는게 조금 더 보기 쉬워보임
function solution(num1, num2) { var answer = num1 === num2 ? 1 : -1; return answer; }

