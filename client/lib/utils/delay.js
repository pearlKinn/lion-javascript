import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');



// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// })

function delayP() {
  return new Promise((resolve, reject) => { // delayP함수를 실행하면 리턴값은 프라미스 객체
    resolve('성공입니다')
  })
}

delayP()
.then((result) => {
  console.log(result);
})

console.log(delayP());
/* 
Promise {<fulfilled>: '성공입니다'}
[[Prototype]] : Promise
[[PromiseState]] : "fulfilled"
[[PromiseResult]] : "성공입니다"
*/



// console.log(2);
// console.log(3);