// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

let n = prompt("이름");

let Backwards = n.split("").reverse().join("");
console.log(Backwards);
