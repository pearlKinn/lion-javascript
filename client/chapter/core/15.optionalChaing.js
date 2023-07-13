/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 그럼 없는것의 하위에 접근할때만 에러인가요?

// 답변 : yes 


// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate); photos는 없기 때문에 에러 발생
console.log(portableFan.photos?.animate); // 옵셔널체이닝을 사용하여 에러 해결

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

/* 
console.log('첫번째 실행')

window.setTimeout(() => { //첫 번째 인수는 함수, 두 번째 인수는 밀리초
  console.log('두 번째 실행') //@ 비동기적 실행
}, 3000) // 윈도우는 생략가능

console.log('세번째 실행')

 */

const timer = setTimeout(()=>{

  const button = /* html */`
    <button type="button">clickMe</button>
  `

  document.body.insertAdjacentHTML('beforeend',button);

},5000)


clearTimeout(timer)

// 딜레이시 나타는 코드를 작성해야 할 때 옵션널 체이닝을 사용해서 에러가 발생하지 않는다
const button = document.querySelector('button');

console.log(button)

button?.addEventListener('click',function() {
  this.style.backgroundColor = 'orange'
})
/* 

let count = 0;
cosnt inertval = setInterval(() => { // 다른 탭으로 이동하면 멈춤
  console.log(++count);
  document.querySelector('.first').style.transform = `translateY~~`
},5000)

if(count > 50 ) {
  clearInterval(interval) // setInterval을 실행하면 아이디값이 반환되는데 그걸 넣으면 실행이 중단됨
}

 */

// requestAnimationFrame 재귀 => setInterval보다 성능이 좋은 아이다