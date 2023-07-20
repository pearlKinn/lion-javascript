import { getNode, clearContents, insertLast } from './lib/index.js';



// JavaScript

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');


function handleInput() {
    // 1. input value 값 가져오기
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  // 2. 두 수의 합 더하기
  let total = firstValue + secondValue;

  clearContents(result);
  // 3. 화면 출력하기
  insertLast(result, total);
}
function handleClear(e) {
  e.preventDefault();
  clearContents(first)
  clearContents(second)
  result.textContent = '-'
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
