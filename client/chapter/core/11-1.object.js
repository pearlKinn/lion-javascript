/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let htmlCode = /* html */ `
  <ul>
    <li class="box"></li>
    <li></li>
    <li></li>
  </ul>
`;

let cssCode = /* CSS */ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization 권한
// authentication 인증

authUser = {
  uid: 'user-id-sdfjsldkf12',
  name: 'beom',
  email: 'seonbeom2@gamil.com',
  isSignIn: true,
  permission: 'paid', //free | paid
};

//-- console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
//^ console.log( authUser.uid );
//^ console.log( authUser.permission );
//^ console.log( authUser.email );

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
//^ console.log( authUser['uid']);
//^ console.log( authUser['email']);
//^ console.log( authUser['name']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// class로 객체 
class User{
  constructor(name,email){
    this.name = name;
    this.email = email
  }
}

const user3 = new User('동혁')

// 함수로 객체 만들기


/* shorthand property (단축 프로퍼티)  */
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'   
) {
  return {
    name: name,
    email: email,
    [computedProp]: number
  }

}
const user1 = createUser(
  '진승',
  'victory',
  'tel',
  '010-1234-5678'
)

// 프로퍼티 포함 여부 확인

// key in user1
for(let key in user1) {
  if(Object.prototype.hasOwnProperty.call(user1, key)) {
    // console.log(key)
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

function getProp(object) {
  if(typeof object !== 'object') {
    throw new Error('getProp 함 수의 매개변수는 객체 타입이어야 합니다')
  }
  return Object.keys(object);
}
/* ------------------------- Object.keys를 사용하지 않고 키만 배열로 담아주는 함수 만들기 --------------------------- */
function getP(object) {
  let result = [];

  for(let key in object) {
    if(({}).hasOwnProperty.call(object, key)) {
      result.push(key)
    }
  }

  return result;
}
//-- console.log(getProp(authUser))

//%        null(비우기)        없앰    
//% 프로퍼티 제거(remove) or 삭제(delete)
//% authUser.name = null; // 제거
//% delete authUser.uid // 삭제

//-- console.log(authUser)

function removeProperty(object, key) { 
  if(typeof object !== 'object') {
    throw new Error ('....')
  }

  if(key === 'all') {
    for(let key of Object.keys(object)) {
      object[key] = null;
    }
      return object
    }

    object[key] = null;

    return object;
  }

function deleteProperty(object, key) {

  if(isEmptyObject(object)) {
    return;
  }
  delete object[key];
  return  object;
}

// console.log(removeProperty(authUser, 'email'))
// console.log(deleteProperty(authUser, 'email'));


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name, // name: name,
  email, // email: email,
  authorization, // authorization: authorization,
  isLogin // isLogin: isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  //%  실행 시, object에 저장된 속성의 갯수가 0이면, 즉, object가 비어있다면 true를 반환하고,
  //% 그렇지 않으면 false를 반환합니다.
  //% return !(Object.keys(object).length);

  //^ if(Object.keys(object).length===0) {
  //^   return true;
  //^ }
  //^ return false;

  return Object.keys(object).length === 0 ? true: false
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff02'];

let [red, blue, green] = color // 순서 중요! let [,,g] = color => green이 담김
                               // let red = color[0];
                               // let blue = color[1];
                               // let green = color[2];

  for(let [key, value] of Object.entries(authUser)) {
    // let key = keyValue[0]
    // let value = keyValue[1]
    //-- console.log(key)
  }

//-- console.log(green)

//% const [a,b,c,d] = document.querySelectorAll('nav li button')
//% a.addEventListener('click', ()=> {})
//% b.addEventListener('click', ()=> {})
//% c.addEventListener('click', ()=> {})
//% d.addEventListener('click', ()=> {})

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권헤미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700
}
// const { 권혜미, 이수연, 강예나, 김태일} = salaries
// const 권혜미 = salaries.권헤미

//-- console.log(권헤미)



// 배열의 구조분해할당: 순서가 정해져 있음, 변수의 이름을 바꿀 수 있다.
// 객체의 구조분해할당: 순서가 정해져 있지 않음, 선언은 같은 변수로 지정해야 하고 `:`을 사용하여 변수를 바꿀 수 있다.
// 기본값도 할당할 수 있다.

function setElementCss(options) {
  const {width:w, height:h = 10, overflow, color} = options;
  console.log(w, color);
}

//^  function setElementCss(options) { //객체를 던지면
//^    console.log(options.width, options.color) // 순서에 상관없이 사용가능
//^  }
//^  const defaults = {
//^    width: 100,
//^    height: 200,
//^    overflow: false,
//^    color: 'orange'
//^  }


setElementCss({
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange'
})