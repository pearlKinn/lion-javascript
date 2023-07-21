/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

//% 1. HTML 속성 : onclick="handler()" 
//^ function handler() {
//^   console.log('HTML 속성에서 이벤트를 실행합니다.');
//^ }

//% 2. DOM 프로퍼티 : element.onclick = handler 
// const first = getNode('.first');

function handler() {
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

//-- first.onclick = handler
//% 3. 메서드 : element.addEventListener(event, handler[, phase]) 
/* 이벤트 추가/제거 --------------------------------------------------------- */

//% - addEventListener   
//% - removeEventListener

//% 이벤트 객체 (event object)                                        
//% 이벤트가 발생하면 브라우저는 자동으로 이벤트 객체라는 것을 만든다.  (e evt ent)
//% 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.       


// function handlerClick(event) { // e evt ent
//   // console.log('이벤트 메소드를 호출합니다');
//   console.log(event);
//   console.log(event.target); // === console.log(this)
//   console.log(event.offsetX); // 클릭하는 x위치를 알려줌

// }
// first.addEventListener('mousedown', handlerClick);
// bindEvent('.first', 'click', handler);
// //% click, mouseover, mouseout, mousedown, mouseup

// setTimeout(() => {
//   first.removeEventListener('mousedown', handlerClick);
// }, 3000)

// const remove = bindEvent('.first', 'click', handler);

// const ground = getNode('.ground')
// const ball = getNode('#ball')

// function handlerClick(e) {
//   let x = e.offsetX
//   let y = e.offsetY

//   ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px, ${y - (ball.offsetHeight / 2)}px)`
//   console.log(e.offsetX, e.offsetY);
// }

// ground.addEventListener('click', handlerClick)

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


// ground.addEventListener('click',handleClick);


// throttle debounce

// ground.addEventListener('mousemove',debounce((e)=>{
//   let x = e.offsetX;
//   let y = e.offsetY;

//   let template = `
//     <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
//   `

//   insertLast(ground,template)
// }));


