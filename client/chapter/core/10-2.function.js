/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// 함수 선언 → 일반 함수 (표현)식
// 함수 안에서만 접근 간으한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 잇는 것은? arguments

let calculateTotal = function () {
  console.log(arguments);

  let total = 0;
  //% for 문을 사용한 방법 

  //^ for(let i=0; i< arguments.length; i++) {
  //^ total += arguments[i];
  //^ }
  

  //% for of문을 사용한 방법 

  //^ for (let key of arguments) {
  //^   total += key;
  //^ }


  //% forEach를 사용한 방법 

  //^ Array.prototype.forEach.call(arguments, function(item) {
  //^ total += item;
  //^ });

  
  //% slice를 빌려써서 배열로 만드는 방법 
  //% Array의 슬라이스라는 기능을 빌려써서 arguments 진짜 배열로 바꿔 realArray에 담았다. (instance method) 
  //^ let realArray = Array.prototype.slice.call(arguments);
  //^ realArray.forEach(function(item) {
  //^   total += item;
  //^ })

  //% Array.from() (Static method)
  //^ let realArray = Array.from(arguments);
  //^ realArray.forEach(function (item) {
  //^   total += item;
  //^ });


  //% spread syntax    69~85 
  //% 스프레드 문법을 사용하여 배열로 바꿈 
  let arr = [12, 40, 100];
  //^ let realArray = [...arguments];
  //^ realArray.forEach(function (item) {
  //^   total += item;
  //^ });
 

  //% Array.reduce 
  let realArray = [...arguments];
   return realArray.reduce((acc,item) => { //acc - 누적값
    return acc + item
   }, 0) // initValue 최초값


  // return total;
};

const result = calculateTotal(1000, 500, 200, 6500);

console.log(result);
//! 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function (){
 //! 익명함수를 넣었지만 변수에 넣었기 때문에 변수의 이름이 함수의 이름이 됨
};

// 유명(이름을 가진) 함수 (표현)식  
let namedFunctionExpression = function hello() {
 //! hello라는 이름을 가진 함수지만 hello()로 호출은 불가능하다 그냥 단지 이름만 가지는 것 일뿐 
};

// 콜백 함수 (표현)식 //@ 나중에 실행 시켜줄게
let callbackFunctionExpression = function(callback) {
// const callback = function() { console.log('콜백 함수 실행!)} 내부적으로 일어나는 일

  callback();
};

callbackFunctionExpression(
  function() {
    // console.log('콜백 함수 실행');
  }
)

const movePage = function(url,success,fail){

  if(url.match(/http.+www/) && typeof url === 'string'){
    // success(url)
  }else{
    // fail()
  }
}

movePage(
  'www.naver.com',
  function(url){
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');
    
    setTimeout(() => {
      window.location.href = url
    }, 3000);
    
  },
  function(){
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
)


// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression - 변수의 보호를 위해 탄생
let IIFE;


// 변수의 보호
// 은닉화 캡슐화 

const MASTER = (function (){//선언부
  var x =10; 
   let uid = 'ajttk753!@'

   return {
    getKey() {
      return uid;
    }
   };
})()//실행부

//장점: 선언부는 매개변수를 실행부는 인수를 가지는데 뭔가를 받았을 때 인자의 이름을 변경하여 사용할 수 있다.

console.log(MASTER.getKey());//MATSTER 변수를 통해서만 접근할 수 있음

