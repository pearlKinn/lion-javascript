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

readystatechange 이벤트를 통해 결과를 가져올 수잇다..
readyState
status 중요!
*/

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
  //& console.log(xhr.readyState); //xhr.open(method, url) 전엔 0
  xhr.open(method, url); // GET 통신 , 통신 할 URL

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  // xhr.setRequestHeader('Content-Type', 'application/json') // 'application/json' 타입이라고 알려줘야 함

  xhr.addEventListener('readystatechange', () => {
    // xhr 자체에서 지원해주는 이벤트
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response)); // 변환해서 사용해 줘야 함
      } else {
        onFail('실패');
      }
    }
    /*
    //#  if (xhr.status >= 200 && xhr.status < 400)   {
    //#    if (xhr.readyState === 4) {                 
    //#      console.log(xhr.response);                
    //#    }                                           
    //#  } else {                                      
    //#    console.log('실패');                         
    //#  }                                             
    */
  });
  // console.log(xhr.readyState); // 1

  xhr.send(JSON.stringify(body));
}

//% method, url, onSuccess, onFail, body , headers 

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

// 1. 자바스크립트의 함수는 객체다
// 2. 사용자(협업개발자) 입장: 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어버리자!!

// shorthand property
//# onSuccess, onFail가 함수인지 알 수 있는 방법 
/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백 함수
 * @return server data
 * 
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url,body, onSuccess, onFail) => {
  xhr({
    method:"POST",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url,body, onSuccess, onFail) => {
  xhr({
    method:"PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method:"DELETE",
    url,
    onSuccess,
    onFail,
  });
};

