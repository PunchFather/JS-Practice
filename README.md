# JS-Practice
JavaScript 문제를 푸는 곳 


# 문제36 : 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 내 정답
let n = prompt().split(" ")
for (let i = 0; i < 10; i++) {
    console.log(n * i);
}

// 
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';
}

console.log(result);

아홉번 반복문 돌리는 것은 알았느나 / 리절트에 +'' 이렇게 넣는걸 생각 못했다.


// https://school.programmers.co.kr/learn/courses/30/lessons/120803
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

solution(2, 3)

//https://school.programmers.co.kr/learn/courses/30/lessons/120807

function solution(num1, num2) {
var answer;     
if(num1 === num2){
answer = 1 }
else{
    answer = -1
};

    return answer;
}

solution(2,3)

//  이렇게 푸는게 더 좋아보임 

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}