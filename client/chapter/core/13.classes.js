/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//Animal => tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    // 무조건 최조 1회 실행됨
    this.name = name;
    console.log('최초 1회 실행됩니다.');
  }

  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

class Tiger extends Animal {
  #prey = '';

  constructor(name, pattern) {
    super(name); // 부모의 변수를 사용하기 위해서는 super 필수 사용
    this.pattern = pattern;
  }

  hunt(target) {
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }

  static sleep(name) {
    console.log(name + '이 잠을 잔다.');
  }
}

const beom = new Tiger('범', '호랑이 무늬');
const hoho = new Tiger('hoho', '호피 무늬');
// const tiger = new Animal('호돌이');

class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
