// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
} // 이런 익명 메소드는 interface로도 구현할 수 있지만 type으로 선언하는게 더 좋다.

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // 선택적 프로퍼티로 만듦
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// class Person implements Greetable, Named {
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log('Hi')
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);
