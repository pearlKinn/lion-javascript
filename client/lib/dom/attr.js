import { getNode } from "./getNode.js";
//% getAttr라는 유틸함수 만들기
function getAttr(node, prop) {
  // 넘어온 대상이 문자인지를 체크
  if (typeof node === 'string') {
    //체크 후 element node로 변경해 줘야 함
    node = getNode(node);
  }
  if (typeof prop !== 'string') {
    throw new TypeError('getAttr 함수의 prop의 값은 "string"이어야 합니다');
  }

  return node.getAttribute(prop); //@ 값을 리턴하지 않으면 무조건 undefined
}

//% setAttr 유틸함수
function setAttr(node, prop, value) {
  // 넘어온 대상이 문자인지를 체크
  if (typeof node === 'string') {
    //체크 후 element node로 변경해 줘야 함
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new TypeError('setAttr 함수의 prop의 값은 "string"이어야 합니다');
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    //! 처음에 없는 값을 넣으면 데이타로 넘어감
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value); // 값을 반환할 필요가 없음
}

/* -------------------------------------------------------------------------- */

export function attr(node, prop, value) {
 
  //% if(!value) {                
  //%   return getAttr(node, prop)
  //% }else {                     
  //%   setAttr(node, prop, value)
  //% }                           

  return !value ? getAttr(node, prop) : setAttr(node, prop, value) // 삼항식 사용
}
// 화살표 함수로 변경
const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);