/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
//% - parentNode 
//% - childNodes 
//% - firstChild 
//% - lastChild 
//% - previousSibling 
//% - nextSibling 

/* 요소 노드에서만 사용 가능 */
//% - parentElement 
//% - children 
//% - firstElementChild 
//% - lastElementChild 
//% - previousElementSibling 
//% - nextElementSibling 

/* 문서 대상 찾기 */
//% - getElementById 
const message = document.getElementById('message')
console.log(message);

//% - getElementsByTagName 
//% - getElementsByClassName 


/* -------------------------------------------------------------------------- */

//% - querySelector 
const first = getNode('.first')
console.log(first);

//% - querySelectorAll 
// const list = document.querySelectorAll('span');
// const [firstSpan, secondSpan]  = document.querySelectorAll('span')
const [firstSpan, secondSpan] = getNodes('span')
console.log(secondSpan);

//% - closest => 부모를 찾아가는 거임 
console.log(first.closest('h1'));

/* 문서 대상 확인 */
//% - matches 
// console.log(first.matches('#message'));

//% - contains 
//% 선택자의 자식들 중에 해당 요소가 있어?
// console.log(first.contains(secondSpan));

//% 클래스를 포함하고 있어?
//% node.classList.contains()

const h1 = getNode('h1')