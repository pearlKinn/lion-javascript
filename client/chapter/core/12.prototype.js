/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  // eat(food) {//^ setter 
  //   this.stomach.push(food); //this는 animal
  // },
  // getEat() {//^ getter
  //   return this.stomach;
  // }
  /* 객체 자체에 부여되어 있는 메소드 set get */
  // 이름이 같아도 됨 알아서 구분해준다
  set eat(food) {//^ animal.eat = '사료' => 함수처럼 보이지만 함수처럼은 호출 불가능 / 동작은 객체에 프로퍼티를 추가하는 것처럼 동작
    this.stomach.push(food);
  },
  get eat() {//^ getter
    return this.stomach;
  }
}

const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  // __proto__: animal
}

const fox = {
  prey:'',
  __proto__: animal
}


tiger.__proto__ = animal



//%   생성자 함수                                                                         
//! 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자함수다!

const str = new String('a'); 
const num = new Number(1); 

function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const cat = new Animal(); //^ new 키워드를 붙이면 생성자 함수가 됨 => 만들어진 산출물은 다 객체다

cat.pattern = '너구리무늬'

cat.say = () =>'냐아아아아아아옹';

cat.hunt = function (target) {
  this.prey = target, //여기서의 this는 function을 호출한 cat
  console.log(`${target}에게 슬금슬금 접근한다.`);
}

const lion = new Animal();

//^ 화살표 함수로 만들면 에러가 발생한다 ==> 화살표 함수는 함수로서의 기능만 하니까 constructor를 내장하고 있지 않기 때문에 new 키워드를 사용하여 객체를 만들 수 없다.
function User(name, age, email) { 
  this.name = name,
  this.age = age,
  this.email = email 
}

const person1 = new User('선범', 32, 'tiger@naver.com')


