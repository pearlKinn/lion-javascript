import { refError } from "../error/index.js";
/* 
[readystate]

0: uninitialized 
1: loading
2: loaded      // 여기서는 확인 불가능
3: interactive // readystatechange 이벤트 여기서 확인 가능한다
4: complete    //
*/

// send까지 해줘야 비동기통신 시작!

/* 
//# 오픈 -> 이벤트리스너 -> 샌드 패턴 

readystatechange 이벤트를 통해 결과를 가져올 수 있다..
readyState
status 중요!
*/

// 콜백 방식
export function xhr({
  // 파라미터를 바로 객체구조분해 할당으로 넣기
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Contols-Allow-Origin': '*',
  },
} = {}) {
  //& const {
  //&   method = 'GET',
  //&   url = '',
  //&   onSuccess = null,
  //&   onFail = null,
  //&   body = null,
  //&   headers = {
  //&     'Content-Type': 'application/json',
  //&     'Access-Contols-Allow-Origin': '*',
  //&   },
  //& } = options; // 구조분해할당

  const xhr = new XMLHttpRequest(); // xhr 생성 / 비동기 통신을 위한 준비

  xhr.open(method, url); // GET 통신 , 통신 할 URL

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  // xhr.setRequestHeader('Content-Type', 'application/json') // JSON 데이터를 서버로 보내는 경우, Content-Type 헤더를 application/json으로 설정

  /* 
  setRequestHeader('Content-Type', 'application/json')

  이 메서드는 서버에 요청을 보낼 때, 요청의 헤더를 원하는 양식에 맞게 설정하는 데 도움준다.
  XMLHttpRequest 객체에 HTTP 요청의 헤더를 설정하는 데 사용되는 메서드 
  HTTP 요청을 보낼 때, 헤더는 요청에 대한 추가 정보를 담고 있다. 
  이 메서드를 사용하여 원하는 헤더를 설정할 수 있다.
  */

  xhr.addEventListener('readystatechange', () => {
    // xhr 자체에서 지원해주는 이벤트
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        //! 콜백함수를 사용하여 결과물을 매개변수로 받아 출력해서 밖에서 사용할 수 있다!
        onSuccess(JSON.parse(response)); // 변환해서 사용해 줘야 함
      } else {
        onFail('실패');
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

//% method, url, onSuccess, onFail, body , headers
//^ 객체로 만들어서 입력해 주는 것도 불편해!!
// xhr({
//   // post, put에서는 body 전달
//   // method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess: (result) => {
//     console.log(result);
//   },
//   onFail(err) { // 축약형
//     console.log(err);
//   },
//   body: {
//     name: 'tiger',
//   },
//   // headers: { 기본값으로 설정했기 때문에 생략 가능
//   //   'Content-Type': 'application/json',
//   //   'Access-Contols-Allow-Origin': '*', // 이거 이후에 CORS에러가 발생한다면 서버에서 해결해 줘야 함
//   // },
// });

/* -------------------------------------------------------------------------- */
//^ 메서드로 만들어서 사용
// 1. 자바스크립트의 함수는 객체다
// 2. 사용자(협업개발자) 입장: 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어버리자!!

//# onSuccess, onFail가 함수인지 알 수 있는 방법
/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백 함수
 * @return server data
 *
 */
// shorthand property
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* promise API -------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다',
  headers: {
    'Content-Type': 'application/json',
    'Access-Contols-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {

  // {} 필수! 안넣으면 디폴트옵션에 덮여씌여짐
  /* 
   Object.assign() 메서드는 여러 개의 객체를 합치는데 사용되며,
   첫 번째 인자에 빈 객체 {}를 전달하면 새로운 객체를 생성하면서 
   다른 객체들의 속성들을 그대로 복사할 수 있습니다.
  */
  const { method, url, body, errorMessage, headers } = Object.assign( {}, defaultOptions, options ); 
  const xhr = new XMLHttpRequest();

  if(!url) refError('서버와 통신할 url은 필수값 입니다');

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: '서버와 통신이 원활하지 않습니다' }); //? 객체로 사용하는 이유
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users'
// })
// .then((res) => {
//   console.log(res);
// });


xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url,body) => {
  return xhrPromise({
    method: 'POST',
    url,
    body
  });
};

xhrPromise.put = (url,body) => {
  return xhrPromise({
    method: 'PUT',
    url,
    body
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    method: 'DELETE',
    url,
  });
};