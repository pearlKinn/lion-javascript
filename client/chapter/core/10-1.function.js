/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900); */

// 함수 선언

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(priceA, priceB, priceC = getRandomValue()) {
 
  //^ *NaN이 나오지 않게 하는 방법 *     [기존]
  //^ 방법 1                              
  //^ if(typeof priceC === 'undefined') {
  //^   priceC = '0';                    
  //^ }                                  
  //^                                    
  //^ 방법 2                              
  //^ if(!priceC) priceC = 0;            
  //^ 방법 3                              
  //^   priceC ||= 0;                    
  //^ 방법 4                              
  //^   priceC ??= 0;                    


  if(!priceA || !priceB) { //! validation -  값을 입력하지 않았을 때
    throw new Error('calcPrice 함수의 첫 번째와 두 번째 매개변수는 필수 입력 값 입니다.')
  }

  return priceA + priceB + priceC;
}

const result = calcPrice(1000, 3500);

//^ 인수가 다 전달되지 않으면 NaN이 뜬다 => undefined로 값이 받아지기 때문에 //조건 처리가 필요!
//-- console.log(result);


// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

//^ 1. function name      
//^ 2. validation         
//^ 3. return pxValue     
//^ 4. parameter, argument
//^ 5. test [TDD]         

function rem(pxValue, base = 16) {
  //% pxValue가 참일 경우 뒤에 문구 실행 
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));

  if(!pxValue) {
    throw new Error('remFunc: pxValue 값을 입력해주세요')
  }
  return `${pxValue / base}rem`;
}

// console.log(rem(50));

console.assert(rem(20)==='1.25rem')//! 간단한 TDD 문제가 없으면 아무일도 발생하지 않음

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
