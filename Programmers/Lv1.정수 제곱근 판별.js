// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 입출력 예
// n	return
// 121	144
// 3	-1

// 다른 사람 정답
function solution(num) {
    let answer = Math.sqrt(num); // 제곱근 시켜주기

    if (answer % 1 == 0) { // 양의 정수 제곱근이면 정수값을 가질것, 따라서 1로 나눈 나머지가 0이 나올것임
        return Math.pow(answer + 1, 2); //요구사항 출력, answer+1을 2제곱
    } else {
        return -1;
    }
}

  // 풀었는데 어디에 갔는지 모르겠..
  // sqrt메서드를 몰랐고 이거 공식 찾느라 시간 진짜 오래썼음
  // sqrt는 121 ** 0.5랑 같음
  // 그리고 정수는 123 이런숫자들이고 소수가 들어가면 안됌

