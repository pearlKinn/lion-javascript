/* --------------- */
/* While Loop      */
/* --------------- */

/* 
let repeat = 0;
while (repeat < 10) {
  console.log(repeat);
  repeat++;
}
 */
const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];
/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)



 let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i]; //성능적인 이슈가 있음 변수의 담아서 사용하는게 좋다
  // console.log(value);
  i++;
} 


// while 문 (역순환 : 역방향)

let z1 = performance.now();

let k = frontEndDev.length - 1;

while (k >= 0) {
  let value = frontEndDev[k];
  // console.log(value);
  k--;
}

let z2 = performance.now();
// console.log(z2 - z1);


// 성능 진단 : 순환 vs. 역순환
// 역방향의 계산이 더 빠르다!!

//배열의 깊은 복사
// let copyArray = frontEndDev.slice(); //.slice() 안에 값을 쓰지 않으면 배열을 그대로 복사 old
let copyArray = [...frontEndDev]; //new



while(copyArray.length) {
  // console.log( copyArray.pop() );
  console.log( copyArray.shift() );
}