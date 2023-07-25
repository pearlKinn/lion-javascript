import { getNode } from '../dom/getNode.js';
// 변수를 왔다 갔다 하면서 선언하지 않고 메모에 저장해두어 어느 파일에서든 사용할 수 있게 함
export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})(); //! 클로저 


// 객체를 만들어서 key:value 쌍으로 저장
