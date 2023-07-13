function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;


  
  return (value) => (gravity = value);
 
  //% return function tiger(value){ => 여기서 함수의 이름은 중요하지 않기 때문에 
  //%   // console.log( apple );       익명함수로 작성하거나 위와 같이 화살표 함수로 줄이기 가능 
  //%   gravity = value;
  //% }
  //% return tiger
}

const ufo = earth();

ufo(5);

//! 클로저란? 본인이 태어난 환경을 기억하는 것

const button = document.querySelector('button');


// let isClicked = true; // 전역 오염 ...



function handleClick(){

  let isClicked = true; 

  return ()=>{
    if(isClicked){
      document.body.style.backgroundColor = 'orange';
    }else{
      document.body.style.backgroundColor = 'transparent';
    }
  
    isClicked = !isClicked;
  }

 
}


button.addEventListener('click',handleClick())





function useState(initValue){
  
  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
}


// setClick()
// const [click,setClick] = useState(true);