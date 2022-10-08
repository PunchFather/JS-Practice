// 문제 설명 https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 입출력 예
// N	answer
// 123	6
// 987	24

function solution(n) {
    let result = n; //자연수 N값을 넣어주고
    let arr = (result + "").split(''); // n값을 배열로 만들고
    let num = arr.map((i) => Number(i)) // n값이 들어있는 배열을 한번씩 순회하여 type을 Number로 만든다.
    var answer = 0;


    for (let i = 0; i < num.length; i++) {
        answer = answer + num[i];
    } //배열의 길이만큼 반복문이 돌아서 answer에 값들을 넣어줬다.

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}

// 다른 사람 풀이
function solution(n) { return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0) }

 // split까지는 배열을 만드는 순서는 같으나, 배열 내장함수인 reduce를 쓰니 훨씬 편해졌다. 
 // reduce (누적값, 현재) => 배열 전체 순회를 하면서 acc에 누적되는 것
