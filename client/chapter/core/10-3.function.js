/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식 //! arrow function은 arguments를 내장하고 있지 않음!!!
//% ...args - rest parameter 
let calcAllMoney = (...args) => { // ...children / ...rest으로도 많이 씀 //@ 하지만 정해져 있는 건 아님

  //^ let total = 0;
  //^ args.forEach((item) => {
  //^   total += item;
  //^ })
/* -------------------------------------------------------------------------- */
  //^ return args.reduce(function(acc, item) {
  //^   return acc + item;
  //^ },0)


  //% 위에 reduce 함수를 화살표 함수로 표현 
  args.reduce((acc, item)=> {
    return acc + item;
  },0); //% return args.reduce((acc, item) => acc + item, 0)로 줄이기 가능 

/* -------------------------------------------------------------------------- */

  // return total
};

let result = calcAllMoney(10000, 8900, 1360, 2100);
console.log(result);
// 화살표 함수와 this
//! this는 함수를 호출하는 방식에 따라 결정된다!
// 함수 선언문 
function normalFuncntion() {
   console.log(this) // 나를 호출한 대상을 디스로 바인딩
  //^ 함수 선언문으로 정의된 함수의 this는 '실행 컨텍스트'에 의해 결정된다 
  //^ 함수 선언문으로 정의된 함수는 전역 범위에서 정의되었을 경우 전역 객체에 바인딩되며, 
  //^ 함수 내부에서 정의된 경우 해당 "함수가 호출될 때"를 기준으로 this가 결정된다. 
  //^ 그냥 선언된 범위에 따라 결정된다는 뜻 
  //^ 호이스팅 발생 
}
// 함수 표현식
const expresstionFunction = function() {
  //^ 함수 표현식에서의 this는 해당 함수가 호출되는 위치에 따라 동적으로 결정된다. 
  //^ 함수를 호출하는 객체에 따라 this가 바인딩되며, 호출하는 방식에 따라 this가 다를 수 있다.
  //^ 그냥 선언된 범위에 따라 결정된다는 뜻 
  //^ 호이스팅 발생 안함 
   console.log(this)// 나를 호출한 대상을 디스로 바인딩

}
// 화살표 함수식
const arrowFunction = () => {
  //^ 화살표 함수는 주로 함수의 스코프와 this 값을 일치시키고, 
  //^ 코드의 간결성과 가독성을 높이는 것을 목표로 하기 때문에 
  //^ 자신만의 this를 생성하지 않고 바인딩이 되어 있는 가장 가까운 상위 컨텍스트의 this를 상속 받는다. 따라서 바인딩도 되지 않는다.
  //^ ==> 장점 
  //^     1. 코드의 가독성과 유지보수성을 향상 
  //^     2. 화살표 함수가 자체적인 this를 생성하지 않는 것은 클로저 함수와의
  //^        상호작용을 간소화하고 예기치 않은 this 오류를 방지하는 데 도움줌
   console.log(this) 
}

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 




// 객체 안에서 this
//! 객체의 메서드를 정의 할때는 화살표 함수보다 일반함수가 더 좋다!!
//! 메서드 안에 함수를 호출 할 때는 화살표 함수가 더 좋다!!
const user = {
  total:0,
  name: 'tiger',
  age: 32,
  address:'서울시 중랑구',
  grades:[80,90,100],
  totalGrades: function(){
     console.log(this.grades); //[80, 90, 100]
//! forEach는 윈도우가 호출한 것이다!!!
    //% this.grades.forEach(function(item) { // forEach문 안에 있는 일반함수라 우리가 원하는 this( user )를 찾을 수 없음!  
    //%     this.total += item;          // function을 호출한 대상이 forEach문이기 때문에 function의 this는 window가 됨 
    //%   })                                                                                                   

    //^ this.grades.forEach((item) => { // 화살표 함수를 사용하면 실행 컨텍스트가 만들어지고 그 위에 부모인 user의 this를 물려 받게 된다.
    //^   this.total += item;                                                                                         
    //^  })                                                                                                           
    //^  console.log(this.total); //270                                                                               
 
    //%  function sayHi() {
    //%   console.log( this ); // 여기서의 this는 totalGrades가 아닌 window다!
    //% }                      // use를 찾고 싶으면 화살표 함수 사용!!
    //% sayHi() //user.sayHi()를 호출한 것이 아니라 그냥 호출된 것이기 때문에 윈도우가 호출한 것이다.

    const sayHi = () => {
      console.log( this ); //this => user
    }
    sayHi()
  }
  //^ 줄여쓰기 가능!! (일반함수이다) 
  //^ totalGrades(){ 
  //^    console.log(this.grades);
  //^ }

 
}