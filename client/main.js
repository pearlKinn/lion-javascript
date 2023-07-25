import {
  attr,
  memo,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  removeClass,
  diceAnimation,
  clearContents,
} from './lib/index.js';

//^ [phase-1] 주사위 굴리기
//^ 1. dice animation 불러오기
//^ 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//^       - 주사위 굴리기 버튼을 가져온다.
//^       - 이벤트 핸들러를 연결한다.
//^       - 애니메이션 코드를 작성한다.
//^ 3. 애니메이션 토글 제어
//^ 4. 클로저 + IIFE 를 사용한 변수 보호

//^ [phase-2] 레코드 리스트 control / view
//^ 1. 주사위가 멈추면 기록/초기화 버튼 활성화
//^ 2. hidden 속성 제어하기
//^       - 기록 버튼 이벤트 바인딩
//^       - hidden 속성 false 만들기
//^       - 초기화 버튼 이벤트 바인딩
//^       - hidden 속성 true 만들기

// 배열 구조 분해 할당

const [startButton, recordButton, resetButton] = getNodes( '.buttonGroup > button' );
const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList tbody');
memo('@tbody', () => getNode('.recordList tbody')) // setter
// memo('@tbody') // getter
let turn = 0;
let total = 0;

// 과제: disableElement(node) , enableElement(node)
function createItem(value) {
  return /* html */ `
  <tr>
    <td>${++turn}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
  `;
}
function renderRecordItem() {
  const diceValue = +attr(memo('cube'), 'data-dice');
  insertLast(memo('@tbody'), createItem(diceValue));
  endScroll(recordListWrapper)
}

// 즉시실행함수 알아보기
const handleRollingDice = ((e) => {
  //! IIFE 패턴
  // let target = e.target.closest('button')
  // console.log(target);
  let isClicked = false; //! 버튼을 한 번 더 누르면 애니메이션 정지
  let stopAnimation;

  return () => {
    // 주사위 play
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      // 주사위 stop
      clearInterval(stopAnimation); //# clearInterval를 사용하기 위해 id 값이 필요함
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

function handleRecordlist() {
  recordListWrapper.hidden = false;
  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  recordButton.disabled = true;
  resetButton.disabled = true;

  clearContents(memo('@tbody'))

  turn = 0; 
  total = 0;
}

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecordlist);
resetButton.addEventListener('click', handleReset);
