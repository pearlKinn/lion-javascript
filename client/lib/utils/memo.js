import { getNode } from '../dom/getNode.js';

const cache = {};

export const memo = (key, callback) => {
  if (!callback) return cache[key];
  cache[key] = callback();

  if(cache[key]) {
    console.warn(`${key}는 이미 캐시된 값이 존재합니다`);
    return cache[key]
  }
  // console.log(cache); //{cube: div#cube}
};

memo('cube', () => getNode('#cube')); // setter

console.log(memo('cube')); // getter
