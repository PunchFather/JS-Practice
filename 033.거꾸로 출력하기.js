// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// 내 정답 
let n = prompt().split(' ')
console.log(n.reverse().join())


// 함수로 만들어봤다.
const number = prompt().split(' ').reverse();
let result = '';

const resultMotion = (num) => {
    for (let i = 0; i < num.length; i++) {
        result += num[i]
    } return result
}

resultMotion(number);

// 책 정답

const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i = 0; i < data.length; i++) {
    result += data[i];
}

console.log(result);