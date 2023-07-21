/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className); // getter
// console.log(first.className = 'box'); // setter 
// console.log(first.className = 'box second'); // setter 두개도 가능


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//% add 
//% remove 
//% toggle 
//% contains 

first.classList.add('hello')
first.classList.remove('hello') // 빈 문자열이나 띄어쓰기만 적으면 에러
first.classList.toggle('is--active') // 없으면 넣어주고 있으면 빼줌 , boolean 값 반환 / 지워지면 false, 추가되면 true

console.log(first.classList.contains('hello')); // false , 조건문에서 많이 사용

addClass('.first', 'hello')

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange' // setter

//! elementNode.style.porp은 getter로는 사용 불가능 / 계산되기 이전 값을 가져오기 때문에
// first.style.backgroundColor = 'orange'를 입력하지 않으면 빈문자열이 나옴
console.log(first.style.backgroundColor); // orange / getter
console.log(first.style.fontSize); // 빈문자 출력


// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
console.log(getComputedStyle(first).fontSize); // 32px / 아래와 같음
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 32px


// document.body.style 우리가 사용할 수 있는 모든 css를 조회 가능
// for..in문을 통해 개개체에 키 값이 있는지 확인 가능

css('.first', 'color', 'pink')

console.log(css('.first', 'color'));
console.log(css('.first', 'fontSize'));