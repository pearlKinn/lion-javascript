/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

// forEach: 값을 반환하지 않음

arr.forEach((item, index) => {
  // console.log(item, index);
});

people.forEach((item) => {
  // console.log(item.name);
});
/* 원형 파괴 ----------------------------- */

//^ push
//^ pop
//^ unshift
//^ shift

//^ reverse
// arr.reverse()
// console.log(arr);

//^ splice : 맥가이버 칼
// arr.splice(1,2) //[10, 10000]
// arr.splice(1,2, 'js' , 'css') //[10, 'js', 'css', 10000]

arr.splice(1, 0, 5, 13);
// console.log(arr);

//^ 반환값 < 0 : a가  b보다 앞에 있어야 한다.
//^ 반환값 == 0 : a와  b의 순서를 바꾸지 않는다.
//^ 반환값 > 0 : b가  a보다 앞에 있어야 한다.
//^ sort
arr.sort((a, b) => a - b);
// console.log(arr);

/* 새로운 배열 반환 ------------------------ */

//^ concat
const user = ['선범', '효윤', '준석'];
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'js'];
// console.log(newArray);

//^ slice
const slice = arr.slice(2, 5);
// console.log(slice);//[13, 100, 1000]

//^ toSorted => 원형을 파괴하지 않음
const toSorted = arr.toSorted((a, b) => b - a);
// console.log(toSorted);

//^ toReversed => 원형을 파괴하지 않음
const toReversed = arr.toReversed();
// console.log(toReversed);

//^ toSpliced => 원형을 파괴하지 않음
// console.log(arr);
const toSpliced = arr.toSpliced(2, 0, 'js', 'css', 'react');
// console.log(toSpliced);

//^ ☆☆map☆☆
const job = people.map((item) => `<div>${item.profession}</div>`);
//  document.body.insertAdjacentHTML('beforeend', job); //=> ,가 같이 나옴

// forEach문을 사용하면 원하는 결과값이 나오게 됨
job.forEach((item) => document.body.insertAdjacentHTML('beforeend', item)); // forEach문은 값을 내보내지 않음

// console.log(job);

/* -------------------------------------------------------------------------- */

//^ const job = people.map((item,index)=>{
//^   return /* html */`
//^     <div class="userCard">
//^       <div class="imageField">
//^         // <img src="${item.imageSrc}" alt="" />
//^       </div>
//^       <span>이름:${item.name}</span>
//^       <span>직업:${item.profession}</span>
//^       <span>나이:${item.age}</span>
//^     </div>
//^   `
//^ })

//^ job.forEach((item)=>{
//^   document.body.insertAdjacentHTML('beforeend',item);
//^ })

//% function render(){
//%   return (
//%     <div>
//%       {
//%         people.map((item,index)=>`<div>${item.profession}</div>`)
//%       }
//%     </div>
//%   )
//% }

/* -------------------------------------------------------------------------- */

/* 요소 포함 여부 확인 ---------------------- */

//^ indexOf
// console.log(arr.indexOf(10))

//^ lastIndexOf
// console.log(arr.lastIndexOf(10))

//^ includes
// console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

//^ find : 해당하는 아이템을 반환
const find = people.find((item) => item.id > 1);
// console.log(find);

//^ findIndex
const findIndex = people.findIndex((item) => item.id === 3);
// console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

//^ filter : 배열을 반환
const filter = people.filter((item) => item.id > 2);

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

//^ reduce

// 초기값이 없으면 reduce는 초기값을 아이템의 첫 번째 항목을 acc에 담는다
const totalAge = people.reduce((acc, cur) => acc + cur.age); // 초기값을 입력하지 않았을 때 객체가 초기값이 된다.

console.log(totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);
// document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤잔 예나 시연 지만 저아';

//^ split :문자 => 배열
const stringToArray = str.split(' ')
// console.log(stringToArray);

//^ join 배열 => 문자
const arrayToString = stringToArray.join('/')
// console.log(arrayToString);
