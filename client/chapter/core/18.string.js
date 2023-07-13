/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
// console.log(stringTotalLength);//13


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
// console.log(extractCharacter); //r


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
//^ slice([begin[, end]])
//^ end : -1을 지정하면 맨 마지막 스트링 제외
let slice = message.slice(1, 3); //1부터 3 전까지
// console.log(slice); //es\

let subString = message.substring(1,3);
// console.log(subString);

// let subStr = message.subStr(1,3);
// console.log(subStr);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
// console.log(indexOf); // 없으면 -1 있으면 인덱스 반환

let lastIndexOf = message.lastIndexOf('e');
// console.log(lastIndexOf); // 마지막 인덱스 값을 반환


let includes = message.includes('less');
// console.log(includes);

let startsWith = message.startsWith('Less'); // 시작단어를 물어보는 메소드
// console.log(startsWith); // Less부터 시작하니? => true
let endsWith = message.endsWith('more.');
// console.log(endsWith);


// 공백 잘라내기

//% Left/Right가 언어에 따라 가로로 기술하는 언어는 문제가 없지만
//% 아랍어처럼 세로로 기술하는 언어는 왼쪽 오른쪽이라는 개념이 맞지 않아요
//% 그래서 접근성 관련해서도 방향보다 시작.종료로 구분하는 형태로 바뀌고 있어요

let trimLeft = message.trimLeft();
// console.log(trimLeft);

let trimRight = message.trimEnd();
// console.log(trimRight);

let str = '         sd   dsf  fd         '
// let trim =str.trim();
// console.log(trim); sd   dsf  fd

//% 정규표현식을 사용하여 문자열 중간의 공백을 지울 수 있음 replace / .split(' ').join('')
//% 모든 공백제거
let trim = str.replace(/\s*/g,'')
// console.log(trim);


function normalText(string){
  return string.replace(/\s*/g,'')
}
normalText(str)
 
// 텍스트 반복
let repeat = message.repeat(3);
// console.log(repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
// console.log(toLowerCase);

let toUpperCase = message.toUpperCase();
// console.log(toUpperCase);

message = 'less is more' 

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}