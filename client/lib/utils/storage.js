import { typeError } from '../error/index.js';
import { isString } from './typeOf.js';

const { localStorage: storage } = globalThis;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
      storage.setItem(key, JSON.stringify(value));
    } else {
      reject({ message: 'setStorage의 첫 번째 인수는 문자타입 입니다.' });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'setStorage의 첫 번째 인수는 문자타입 입니다.' });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key)
    resolve()
  });
}
