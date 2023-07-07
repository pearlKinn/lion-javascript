/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
/* 
for(let j=1; j<=10; j++) {
  if(j %2===0){
    //-- console.log(j);
  } 
}
 */

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

/* while(i < l) {
  console.log(frontEndDev[i]);
  i += 1;
} */

//^ while 문 → for 문 (순환)
//^ - 실행 흐름
//^ - 순환 중단 또는 이어서 순환
//^   - 조건이 맞을 경우, 이어서(continue) 순환
//^   - 조건: SVG, jQuery는 출력하지 마세요.

//^  - 조건이 맞을 경우, 순환 중단(break)
//^  - 조건: JavaScript 까지만 출력하세요.

for (; i < l; i++) {
  let value = frontEndDev[i];

  if (value === 'SVG' || value === 'jQuery') continue; // if(value.includes('SVG) || value.includes('jQuery')) continue;
  //-- console.log(value);
  if (value === 'JavaScript') break;
}

//^  - 무한 루프 (브레이크)
//^  - for 문 (역순환)

/* for (let i = l - 1; i >= 0; i--) {
  let value = frontEndDev[i];

  console.log(value);
} */
//^ 6~0 까지 나오길 원함 
for (let i = l; i > 0; ) {
  let value = frontEndDev[--i]; //% frontEndDev에서 바로 선감소를 시키면 조건을 간단하게 할 수 있다. 

  console.log(value);
}
