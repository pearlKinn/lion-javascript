/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
// const btnA = getNode('.a')   이런식으로 이벤트를 생성하면 리소스를 많이 잡아 먹기 때문에 이벤트 위임을 사용한다!
// const btnA = getNode('.a')
// const btnA = getNode('.a')
// const btnA = getNode('.a')

// btnA.addEventListener('click', () => {

// }) * 4

const container = getNode('.container');

function handleDelegation(e) {
  //% console.log(this); // 일반함수일 때 === this / container (이벤트가 걸린 대상)     
  //% console.log(e.currentTarget); // 일반함수일 때는 container (이벤트가 처음 걸린 대상)
  //% console.log(e.target); // 마우스가 처음 만난 대상을 가리킴                        

  let target = e.target;
  let li = target.closest('li');
  
  if(!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name') //target.dataset.name

  // console.log(target.closest('li')); // 상위 부모 중에서 가장 가까운 li를 찾아줌 
 
  if(className === 'home') {
    console.log('홈 실행');
  }

  // target.getAttribute('class'); 속성 가져오는 메소드
  //^ if (className === 'a') {
  //^   console.log('A버튼 클릭');
  //^ }
  //^ if (className === 'b') {
  //^   console.log('B버튼 클릭');
  //^ }
  //^ if (className === 'c') {
  //^   console.log('C버튼 클릭');
  //^ }
  //^ if (className === 'd') {
  //^   console.log('D버튼 클릭');
  //^ }

  // if(dataName === 'A') {
  //   console.log('A버튼 클릭');
  // }

}

//^ const arrowHandleDelegation = (e) => { 
//^   console.log(this); // window 
//^   console.log(e.currentTarget); // container 이벤트가 걸린 현재 대상 
//^   console.log(e.target); // button 누르면 button 수집 가능 
//^ } 

container.addEventListener('click', handleDelegation);
// container.addEventListener('click', arrowHandleDelegation)

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
