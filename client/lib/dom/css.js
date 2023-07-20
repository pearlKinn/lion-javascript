import { getNode } from "./getNode.js";
/* Class -------------------------------------------------------------------------- */
export function addClass(node, className) {
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  node.classList.add(className)
}
/* -------------------------------------------------------------------------- */
export function removeClass(node, className) {
  if(!className) { // className의 값이 비어 있을 때 class를 모두 비워줌
    node.className ='';
    return;
  }
  
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  node.classList.remove(className)
}
/* -------------------------------------------------------------------------- */
export function toggleClass(node, className) {
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  return node.classList.toggle(className)
}

/* CSS -------------------------------------------------------------------------- */

function setCss(node, prop, value) {
  if(typeof node === 'string') node = getNode(node)

  if(!(prop in document.body.style)) {
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다')
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.')

  if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('setCss의 두 번째, 세 번째 타입은 문자이어야 합니다')

  node.style[prop] = value
}

function getCss(node, prop) {//'font-size'.indexOf('-')
  if(typeof node === 'string') node = getNode(node)
  
  if(!(prop in document.body.style)) {
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다')
  }

  if(prop.indexOf('-') == -1) return getComputedStyle(node)[prop]
  return getComputedStyle(node).getPropertyValue(prop)
}

// css()
export const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);