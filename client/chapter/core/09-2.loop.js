/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/*

let i = 0;
do {
  if (i === 0) {
    console.log('최초실행');
  } else {
    console.log(`${i}번째 실행`);
  }

  // console.log(i);
  i++;
} while (i < 10);

 */

// do ~ while 문 (역순환)
// prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// 사용자로부터 요청된 횟수가 0보다 작을 경우,
// '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// 순환 중단

/*


let repeat = Number(prompt('숫자를 입력해주세요', 0));
do {
  console.log(repeat);
  if (repeat <= 0) {
    // console.log('최초 실행된 메시지입니다.');
    break;
  }
  repeat--;
} while (repeat > 0);
 */

// do ~ while 문 (순환)
// 위 do ~ while 문을 순방향으로 순환되도록 설정

// 하나의 대상을 잡고 그 다음 대상은 자동으로 잡을 수 있도록 하는 코드
// text, comment, span은 노드라고 하는데 노드는 가장 작은 단위이다 노드는 타입이 존재한다
// 이런 노드 타입을 이용해서 원하는 엘리먼트가 나올 때까지 반복문을 실행!

let first = document.querySelector('.first');
// first = first.nextSibling.nextSibling.nextSibling.nextSibling;
/* 
do {
  first = first.nextSibling;

}while(first.nodeType !== document.ELEMENT_NODE); //ELEMENT_NODE 타입과 일치 했을때 반복문을 멈춤!

 */
//% 다음 엘리먼트 노드를 찾는 함수
function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

const second = next(first);
console.log(second); 

//% 이전 엘리먼트 노드를 찾는 함수

function prev(node) {
  do {
    node = node.previousSibling;
  }while(node.nodeType !== 1);

  return node;
}

console.log(prev(second));