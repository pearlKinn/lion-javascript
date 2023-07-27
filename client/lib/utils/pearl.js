// const data =  fetch('https://jsonplaceholder.typicode.com/users'); // url, (option) => get (set)
// const response = await fetch('https://jsonplaceholder.typicode.com/users'); // url, (option) get (set)

// console.log(data); // 프라미스 객체 반환
// console.log(response); // 정보를 담고 있는게 아닌 통신이 어떻게 이루어졌는지 알려주는 것
// if (response.ok) {
//   const responseData = await response.json();
//   console.log(responseData); // 정보에 접근하려면 .json()을 사용해야 한다
// }

const URL = 'https://jsonplaceholder.typicode.com/users';

//! get만 했을 때 
// const pearl = async (url) => {
//   const response = await fetch(url); // 상태정보를 담고 있음
//   // console.log(response);
//   if (response.ok) {
//     response.data = await response.json(); // 객체 안에 데이터 키를 만들어서 정보를 저장
//     //  console.log(response.data);
//   }

//   return response;
// };

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const pearl = async (options) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: { // 깊은 복사가 필요
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  const response = await fetch(url, restOptions); // 상태정보를 담고 있음
  
  if (response.ok) {
    //% response.json() => 프라미스 객체로 반환 
    response.data = await response.json(); // 객체 안에 데이터 키를 만들어서 정보를 저장 => 코드의 가독성을 높이기 위해 사용
  }

  return response;
};

//# 메소드로 만들어서 사용  
pearl.get = async (url, options) => {
  return await pearl({
    url,
    ...options
  })
}

pearl.post = (url, body ,options) => {
  return pearl({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  })
}

pearl.put = (url, body, options) => {
  return pearl({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  })
}

pearl.delete = async (url, options) => {
  return await pearl({
    method: 'DELETE',
    url,
    ...options,
  })
}