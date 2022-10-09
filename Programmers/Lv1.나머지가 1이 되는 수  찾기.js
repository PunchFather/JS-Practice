// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
// n	result
// 10	3
// 12	11

// 내 풀이
function solution(n) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            answer.push(i);
        }
    }
    return answer[0];
}

// 다른 사람 풀이 

function solution(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}

// 내가 잘못했던점
1.우선 제한사항을 확인하면 n은 3이상이 숫자부터 시작인 것
2.배열을 남발한 것 => 다른 사람 풀이를 확인해보면 바로 처음 나오는 값(제일 작은 수)을 리턴해버렸다.쉽게 푸는 방법을 생각하고 남이 볼 때, 쉽게 보이게 해야한다.