/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

//^ 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
//^ 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다.
//^ 표준 속성이 아닌 경우, 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
//^ HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');
console.log(first); // <span class="first" id="message">hello</span>
console.dir(first); // span#message.first
console.dir(first.id); // message
console.dir(first.class); // undefined => 이미 js에서는 클래스라는 문법이 있기 때문에 중복을 방지하기 위해 html에 접근할때는 클래스네임이라고 접근해야 한다
console.log(first.size); // undefined 표준속성이 아니기 때문에
/* DOM 프로퍼티 ----------------------------------------------------------- */

//^ DOM 노드(DOM node)는 JavaScript 객체입니다.
//^ DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
//^ - 어떤 값이든 가질 수 있습니다.
//^ - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
//^ - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

//^ - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log(first.hasAttribute('size')); //true 표준인지는 상관없이 가지고 있는 여부를 체크

//^ - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute('class')); // first
console.log(first.getAttribute('id')); // message
console.log(first.getAttribute('size')); // 10

//^ - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('title', '메시지');
// first.setAttribute('class', 'second');
console.log(first.getAttribute('class')); // 기존의 값이 사라지고 second로 대체된다.

//^ - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('title');

//^ - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); //NamedNodeMap {0: class, 1: id, 2: size, class: class, id: id, size: size, length: 3}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

//^ data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
//^ data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

//^ - elementNode.dataset
//! html에 케밥형식으로 작성하면 .dataset에서 카멜케이스로 나온다.
console.log(first.dataset); // elementNode.dataset이라는 프로퍼티 안에 data-로 쓴 모든 속성값이 나온다
console.log(first.dataset.size); // 10 (getter)
console.log(first.dataset.tabIndex); // 0 (getter)

first.dataset.animation = 'paused'; // 속성 추가 (setter)
