/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;
console.log(empty);

// 2. 값이 할당되지 않은 상태

let unknown;
console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// 문자 생성자 / 잘 사용 안함
const hi = new String('hello'); 

//문자 리터럴
const double = "hello";
const single = 'hello';
const backtick = `hello ${1 + 3}`;

// 4. 정수, 부동 소수점 숫자(길이 제약)

//숫자 생성자 / 잘 사용 안함
const number = new Number(123);

const integer = 123;
const floatingPointNumber = 10.45;


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

// 생성자로 쓸 때 new를 안 붙여도 됨 -> 비교적 최신에 나왔기 때문에
const big = BigInt(123);

const bigInteger = 123n;


// 6. 참(true, yes) 또는 거짓(false, no)

const bool = true;
console.log(typeof bool);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
//constructor에 의해 객체를 생성자로 만든 것이 가능
const Obj = new Object({});

const obj = {}


// 8. 고유한 식별자(unique identifier)

// 생성자로 쓸 때 new를 안 붙여도 됨 -> 비교적 최신에 나왔기 때문에
const unique = Symbol('uid');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log( typeof (1+2) );

// 언어 상, 오류




// Object

const user = {
  name: 'tiger',
  age: 28,
  // 객체 안에 있는 함수는 => 메서드
  sayHi: function() {
    console.log('hello');
  },

// 함수 선언 방식
  alert1: function () { //nomal function

  },
  alert2 (){ //consise(축약) method

  },
  alert3:()=>{// arrow function

  }

}

console.log(user);
console.log(user.name);

// Array

const newArray = new Array();
const arr = [10, 100, 1000];

// function
function fishBreadFrame(재료) {
  return 재료 + ` 맛 붕어빵`;
}

const 팔붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');


