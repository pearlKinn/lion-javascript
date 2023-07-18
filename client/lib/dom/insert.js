function insertLast(node, text) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if(node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError('isnertLast 함수의 첫 번째 인수는 ELEMENT NODE이어야 합니다')
  }
  return node.insertAdjacentHTML('beforeend', text)
}