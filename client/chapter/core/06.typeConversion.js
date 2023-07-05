/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;
// 문자는 콘솔 창에서 흰색
console.log(String(YEAR)); //명시적
console.log(YEAR + ''); //암시적

// undefined, null
let days = null;
console.log(typeof String(days)); //string
console.log(days + ''); //'null'

let undef = undefined;
console.log(typeof String(undef)); //string
console.log(undef + ''); //'undefined'

// boolean
let isClicked = true;
console.log(String(isClicked)); //'true'
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let bankbook = null;
console.log(Number(bankbook)); //0

// boolean
let cutie = true;
console.log(Number(cutie)); //1

// string
let num = '150';
console.log(Number(num)); //150
//암시적
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width)); //NaN

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); //false
console.log(Boolean(bankbook)); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false

//암시적
console.log(!!false);