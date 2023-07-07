/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// 객체의 속성(property) 포함 여부 확인 방법
const key = 'valueOf';
//-- console.log(key in javaScript);
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//% in 문: 객체 안에 내가 원하는 값(property)이 있어?
//% true / false로 나옴
//! 단점: 프로토타입 체이닝에 의해 조상 객체까지 찾아짐.

Object.prototype.nickname = 'tiger';
// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

//^ console.log(javaScript.hasOwnProperty(key));
//^ 얘도 위험함 hasOwnProperty가 오염될 수 있기 때문에 다음과 같이 사용 해야 한다 .

//% `call`을 사용하여 진짜 객체에게 능력을 빌려야 함!
//% 다른 타입에 있는 기능을 빌리고 싶을 때도 call을 사용하면 능력을 빌릴 수 있음
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
for (let key in javaScript) {
  if(({}).hasOwnProperty.call(javaScript, key)) { //Object.prototype.hasOwnProperty.call(javaScript, key) 같은 뜻
      console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?

const tens = [10,100,1000,10000];

for(let key in tens) {
  console.log(tens[key]);
}

//! for...in은 방문 순서가 중요한 배열보다는 객체에 사용하는 것이 좋다!  
