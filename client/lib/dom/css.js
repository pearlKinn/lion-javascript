function addClass(node, className) {
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  node.classList.add(className)
}
/* -------------------------------------------------------------------------- */
function removeClass(node, className) {
  if(!className) { // className의 값이 비어 있을 때 class를 모두 비워줌
    node.className ='';
    return;
  }
  
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  node.classList.remove(className)
}
/* -------------------------------------------------------------------------- */
function toggleClass(node, className) {
  if(typeof node === 'string') node = getNode(node)
  if(typeof className !== 'string') throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입이어야 합니다')

  return node.classList.toggle(className)
}

