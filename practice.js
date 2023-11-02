// 1번
console.log("hello world!")

// 2번
let number = 10

// 3번
let string1 = "hello"
let string2 = "javascript"
let combinedString = string1.concat(" ", string2)
  // " "띄어쓰기를 위해 사용 concat(str1,str2,str3,---)
console.log(combinedString)

// 4번 두 수를 더하는 함수를 작성하고, 이를 사용하여 5와 10의 합을 계산하세요.
function plus(number1,number2){
  return number1+number2
}
console.log(plus(5,10))

// 5번 for 반복문을 사용하여 1~10까지의 수를 출력하는 코드를 작성하세요. 
// for(i=1; i<=10; i++){
//   console.log(i)
// }

// 6번 if문을 사용하여 어떤 변수가 짝수인지 홀수인지 판별하는 코드를 작성하세요.
  // /나누기 값, %는 나머지
function distinguishNumber(number){
  if(typeof(number)==="number"){
    if(number%2===0){
      console.log("짝수입니다.")
    } else if(number%2 ===1){
      console.log("홀수입니다.")
    } else{
      console.log("정수가 아닙니다.")
    }
  } else {
    console.log("숫자타입이아닙니다.")
  }
}

// 7번 javascript에서 null과 undefined의 차이점을 설명하세요.

  // null은 빈 값이고, undefined는 값이 없는 것.

// 8번 자바스크립트에서 식별자로 사용될 수 있는 예를 3가지 제시하세요.
  // 변수명, 함수명, 속성명, 메소드명
  
// 9번 const, let, var의 차이점
  // var: 호이스팅(변수 선언전엔 접근x) 적용. 블록스코프{} 적용안됨.
  // let: 블록스코프{} 적용됨. 재할당 됨.
  // const: 재할당 안됨. but 변수가 참조하는 객체의 내부 속성은 변경 가능할 수 있음.

// 10번 자바스크립트에서 주석을 어떻게 작성하는지 예시를 들어보세요.
  // ctrl+/

// 11번 VSCODE에서 지원하는 JSDoc의 기능을 설명하세요.
  // 1. 자동완성
  // 2. 타입정보표시
  // 3. 매개변수와 반환값 설명
  // 4. 코드분석
  // 5. 도움말 및 인라인 설명
  // 6. 프로젝트 탐색기(explorer)에서 탐색

// 12번 "use strict"는 무엇이고, 어떻게 사용하는지 설명하세요.
  // use strict"는 ECMAScript 5(ES5)에서 도입된 JavaScript의 엄격 모드(strict mode)를 활성화하는 명령문입니다. 엄격 모드는 JavaScript 코드를 더 안전하게, 일관되게, 그리고 예측 가능하게 만들어 주는 모드로, 일부 예상치 못한 동작을 방지하고 코드의 오류를 쉽게 파악할 수 있게 합니다.
  // "use strict"를 사용하는 방법은 아주 간단합니다. 스크립트 파일이나 함수의 최상위에  "use strict"를 선언합니다

  // "use strict의 기능"
  // 1. 암묵적 전역 변수 금지: 변수를 정의하지 않고 값을 할당하는 것이 금지됩니다. 이로써 전역 스코프의 불필요한 변수 오염을 방지합니다.
  // 2. 전역 객체 수정 제한: 전역 객체(this)의 속성을 수정할 때 엄격 모드에서는 허용되지 않는 경우가 있습니다.
  // 3. 변수 이름 중복 금지: 함수 내에서 중복된 매개변수 이름을 사용하거나 중복된 속성 이름을 가진 객체를 생성하는 것이 금지됩니다.
  // 4. 리터럴 객체 속성 표현식: 엄격 모드에서는 객체 리터럴 내에서 같은 속성 이름을 중복 정의할 수 없습니다.
  // 5.delete 사용 제한: 일부 속성 및 변수는 엄격 모드에서 delete 연산자로 삭제할 수 없습니다.
  // 6. eval() 사용 제한: eval() 함수를 사용할 때 엄격 모드에서는 자체 스코프를 갖지 않으며, 변수 및 함수를 정의할 수 없습니다.
  // 7. 일부 예약어 제한: 일부 예약어를 변수 이름으로 사용할 수 없습니다.
  // 8. this 값 제한: 함수 내에서 this 값가 정확하게 결정됩니다.
  // 9. Octal 리터럴 금지: 8진수 리터럴 표현이 금지됩니다.
  // 10. 익명 함수의 이름 제한: 익명 함수 표현식에서 함수 이름을 설정할 수 없습니다.
  // 11. with 문 금지: with 문은 엄격 모드에서 사용할 수 없습니다.

// 13번 자바스크립트에서 대소문자를 구분하는 예를 들어보세요.
  var apple = "사과";
  var Apple = "애플";
  console.log(apple)
  console.log(Apple)
  // 자바스크립트에서는 대소문자는 구별되므로 아예 다른 변수이다.

// 14번 자바스크립트에서 사용하는 데이터타입들을 나열하세요.
  // 1. 숫자 (Number): 정수와 부동 소수점 숫자를 나타냅니다. 예를 들어, 10, 3.14와 같은 숫자 데이터 타입이 있습니다.
  // 2. 문자열 (String): 텍스트 데이터를 나타냅니다. 예를 들어, "Hello, World!"와 같은 문자열 데이터 타입이 있습니다.
  // 3. 불리언 (Boolean): true 또는 false 값을 가지며 조건을 나타내는 데 사용됩니다.
  // 4. 객체 (Object): 복합 데이터 타입으로, 여러 속성과 메서드를 포함할 수 있습니다. 객체는 중괄호 {}를 사용하여 생성됩니다.
  // 5. 배열 (Array): 여러 값을 포함하는 순서 있는 리스트를 나타내며, 대괄호 []를 사용하여 생성됩니다.
  // 6. 함수 (Function): 코드 블록을 정의하고 재사용 가능한 동작을 나타내는 데 사용됩니다.
  // 7. undefined: 변수가 초기화되지 않았거나 값이 할당되지 않은 상태를 나타냅니다.
  // 8. null: "빈" 또는 "존재하지 않음"을 나타내는 특별한 값입니다.
  // 9. 심볼 (Symbol): 고유하고 변경 불가능한 값을 나타내며 주로 객체 속성의 키로 사용됩니다.
  // 10. BigInt: 매우 큰 정수 값을 나타내는 데이터 타입으로, 숫자 뒤에 n을 붙여서 표시됩니다. (예: 10n)

// 15번 조건문에서 truthy와 falsy라는 개념이 무엇인가요? 각각의 예를 들어보세요.
  // 조건문에서 "Truthy" 값은 조건을 충족하는 것으로 간주되며, "Falsy" 값은 조건을 충족하지 않는 것으로 간주됩니다. 이러한 개념을 사용하여 조건문에서 다양한 상황에 따라 코드를 실행하거나 제어할 수 있습니다.
  // true와 truthy의 차이: true는 직접적인 참 값이고, "truthy"는 조건식에서 참으로 평가되는 다양한 값의 범주를 나타냅니다.

// 16번 typeof 연산자를 사용해 변수의 타입을 확인하는 예제 코드를 작성하세요.
  let num = 42;
  let str = "Hello, world";
  let bool = true;
  let arr = [1, 2, 3];
  let obj = { key: "value" };
  let func = function () {
      console.log("Function");
  };

  console.log(typeof num);  // 출력: "number"
  console.log(typeof str);  // 출력: "string"
  console.log(typeof bool); // 출력: "boolean"
  console.log(typeof arr);  // 출력: "object"
  console.log(typeof obj);  // 출력: "object"
  console.log(typeof func); // 출력: "function"

// 17번. 자바스크립트에서 ==와 ===의 차이점을 설명해보세요.
  // ==는 값만 비교하고 데이터 유형을 무시하므로 혼란을 일으킬 수 있습니다. ===는 값과 데이터 유형을 모두 비교하므로 일반적으로 더 엄격한 비교를 수행하는 것이 좋습니다. 때문에 ===를 사용하여 비교하는 것을 권장합니다.

// 18번 변수 x에 값 10을 할당하고, x의 값이 10인지 확인하는 코드를 작성해보세요.
  // let x = 10;
  // console.log(x)

// 19번 +, -, *, / 연산자를 사용해 간단한 산술 연산을 하는 코드를 작성하세요.
  function plus(number1,number2){
    return number1+number2 
  }
  // 같은 방법으로 빼기, 곱하기, 나눗셈 하면된다.

// 20번 10을 3으로 나눈 나머지를 구하는 코드를 작성하세요.
  function namuji(number1,number2){
    return number1%number2
  }
  console.log(namuji(10,3))

// 21번 x가 y보다 큰지 확인하는 조건식을 작성해보세요.
  // let x= 3
  // let y= 10
  function compareXY(x,y){
    if(x>y){
      return true
    } else{
      return false
    }
  }
  // console.log(compareXY(x,y))

// 22번 x가 y와 같은지, 그리고  z가 0이 아닌지 확인하는 복합 조건식을 작성해보세요.
  // let x= 3
  // let y= 10
  // let z= 1
  function compareIfxyequalAndZIs0(x,y,z){
    if(x===y){
      console.log("x와 y는 같습니다.")
      if(z===0){
        console.log("z는 0이 맞습니다.")
      } else{
        console.log("z는 0이 아닙니다.")
      }
    } else{
      console.log("x와 y는 다릅니다.")
      if(z===0){
        console.log("z는 0이 맞습니다.")
      } else{
        console.log("z는 0이 아닙니다.")
      }
    }   
  }

  // compareIfxyequalAndZIs0(x,y,z)

// 23번 x를 y로 나눈 몫을 구하는 코드를 작성해보세요.
  // let x = 10
  // let y = 2
    function xDivideY(x,y){
      return x/y
    }
    // console.log(xDivideY(x,y))

// 24번 두 변수 x,y의 값을 서로 교환하는 코드를 작성해보세요.
  let x = 5;
  let y = 10;

  [x, y] = [y, x];
  console.log(x)
  console.log(y)
  // 디스트럭쳐링
  // const numbers = [1, 2, 3, 4];
  // const [a, b, c, d] = numbers;
  // console.log(a); // 1
  // console.log(b); // 2
  // console.log(c); // 3
  // console.log(d); // 4

// 25번 while문을 사용해 1부터 10까지는 수를 출력하는 코드를 작성하세요.
  // let i = 1;
  // while(i<=10){
  //   console.log(i);
  //   i++
  // }

// 26번 switch문을 사용해 변수가 어떤 값인지 분기하는 코드를 작성하세요.
  let day = "일요일";

  switch (day) {
    case "월요일":
      console.log("오늘은 월요일입니다.");
      break;
    case "화요일":
      console.log("오늘은 화요일입니다.");
      break;
    case "수요일":
      console.log("오늘은 수요일입니다.");
      break;
    case "목요일":
      console.log("오늘은 목요일입니다.");
      break;
    case "금요일":
      console.log("오늘은 금요일입니다.");
      break;
    case "토요일":
      console.log("오늘은 토요일입니다.");
      break;
    case "일요일":
      console.log("오늘은 일요일입니다.");
      break;
    default:
      console.log("올바른 요일이 아닙니다.");
  }

// 27번 try/catch 문을 사용해 변수가 어떤 값인지 분기하는 코드를 작성하세요.
  try {
    // 어떤 작업에서 예외 발생
    let result = 10 / 0;

    // 예외 발생하지 않으면 아래 코드 실행
    console.log("결과:", result);
  } catch (error) {
    // 예외 처리
    console.error("예외가 발생했습니다:", error);
  }

// 28번 continue문을 사용해 짝수만 출력하는 코드를 작성하세요.
  // for (let i = 1; i <= 10; i++) {
  //   if (i % 2 !== 0) {
  //     continue; // 홀수인 경우 건너뛰기
  //   }
  //   console.log(i); // 짝수만 출력
  // }
  
// 29번 break문을 사용해 반복문을 중단하는 코드를 작성하세요.
  // for (let i = 1; i <= 10; i++) {
  //   console.log(i);
  //   if (i >= 6) {
  //     // i가 5 이상이면 반복문 중단
  //     break;
  //   }
  // }

// 30번 비어있는 객체를 선언하는 코드를 작성하세요.
  let emptyObject= {}

  emptyObject.name = 'Hong';  // 프로퍼티 key1에 value1 할당
  emptyObject.age = '30';  // 프로퍼티 key2에 value2 할당

  console.log(emptyObject)
  // 객체 생성자 사용
  const person = new Object();
  person.name = 'Hong';
  person.age = 30;
  console.log(person)

// 31번 속성 'address'가 대덕대로, 'number'가 182인 객체를 생성하세요.
  let addressObject = {
    'address':'대덕대로',
    'number': 182
  }
  console.log(addressObject)

// 32번 객체의 속성에 접근하는 두 가지 방법을 코드로 작성하세요.
  // 점표기법과 대괄호표기법
  console.log(addressObject.address)
  console.log(addressObject['number']) 

// 33번 객체에 새로운 속성을 동적으로 추가하는 코드를 작성하세요.
  addressObject.city = "대전광역시"
  addressObject[182] = "도로명"
  console.log(addressObject)
  // 점표기법은 문자열만 되고 대괄호는 숫자도 가능?

// 34번 객체의 속성을 삭제하는 코드를 작성하세요.
  delete addressObject[182]
  console.log(addressObject)

// 35번 객체의 모든 속성을 순회하며 출력하는 코드를 작성하세요.
  // const myObject = {
  //   name: "John",
  //   age: 30,
  //   job: "Developer"
  // };

  // 1번째 방법
  // for (let key in myObject) {
  //   if (myObject.hasOwnProperty(key)) {
  //     console.log(key + ": " + myObject[key]);
  //   }
  // }
  // 2번째 방법  
  // Object.keys(myObject).forEach(key => {
  // console.log(key + ": " + myObject[key]);
  // });

// 36번 this 키워드에 대해 설명하고 사용 예를 만드세요.
  // 1. 전역 컨텍스트: 전역 스코프에서 'this'는 전역객체를 가리킨다.
  // 2. 함수 내부 
  // function sayHello() {
  //   console.log("Hello, " + this.name);
  // }
  
  // const person = { name: "Alice" };
  // const anotherPerson = { name: "Bob" };
  
  // person.sayHello = sayHello;
  // anotherPerson.sayHello = sayHello;
  
  // person.sayHello(); // "Hello, Alice"
  // anotherPerson.sayHello(); // "Hello, Bob"
  // 3. 객체 메서드: 객체 메서드내에서 'this'는 해당 메서드를 호출한 객체를 가리킴
  // 4. 이벤트 핸들러: 이벤트 핸들러 내에서 this는 이벤트 대상 요소를 가리킵니다.
  // 5. 생성자 함수: 생성자 함수를 사용하여 객체를 생성할 때 this는 새로 생성된 객체를 가리킵니다.

// 37번 비어있는 배열을 선언하는 코드를 선언하세요.
  // const emptyarray = []

// 38번 1부터 5까지의 숫자를 원소로 갖는 배열을 선언하는 코드를 작성하세요.
  // const array =[1,2,3,4,5]

// 39번 배열에 새로운 원소를 추가하는 코드를 작성하세요.
  const array = [1,2,3,4,5]
  // 1. push: 끝에 자리에 추가
  // 2. unshift: 첫번째자리에 추가
  // 3. concat: 배열끼리 합칠 때
  // 4. 배열인덱스에 접근
  // 5. 전개연산자
  // 6. splice
  // const fruits = ["apple", "banana"];
  // const newFruit = "cherry";
  // const allFruits = [...fruits, newFruit]; // 배열을 확장하여 새로운 원소 추가
  // console.log(allFruits); // ["apple", "banana", "cherry"]

// 40번 배열에서 특정 원소를 제거하는 코드를 작성하세요.
  const fruits = ["apple", "banana", "cherry","peach","grape"];
  // 1. splice(): 배열에서 '특정위치'에 있는 원소를 제거할 수 있다.
  // splice(start,deleteCount,item1,item2,-----)
  // fruits.splice(1,2,"사과")
  // console.log(fruits)

  // 2. filter(): 배열에서 특정 조건을 걸어 추가하거나 뺄 수 있다.
  // console.log(fruits.filter(fruit=>fruit!=="apple"))

  // 3. pop(): 배열의 끝에 있는 원소를 뽑아옴. 배열에서 삭제하면서 값을 가져올 수 있다.
  // console.log(fruits.pop())

  // 4. shift(): 배열의 처음에 있는 원소를 뽑아옴. 배열에서 삭제하면서 값을 가져올 수 있다.
  
  // 5. slice(): 배열의 일부분을 선택할 수 있다.
  // slice(start,end)  -> start,end 처음,끝의 인덱스를 지칭 근데 end 인덱스의 원소는 포함되지않음.
  // console.log(fruits.slice(0,3))

// 41번. 배열의 길이를 확인하는 코드를 작성하세요.
  // console.log(fruits.length)

// 42번. 배열의 모든 원소를 순회하여 출력하는 코드를 작성하세요.
  // 1. forEach사용
  // fruits.forEach(function(currentValue, index, array){
  //   console.log(currentValue, index, array)
  // })
  // currentValue: 현재 반복 중인 배열 요소의 값
  // index: 현재 반복중인 배열요소의 인덱스 값
  // array: `forEach()`가 호출된 배열 자체입니다.

  // 2. for..of사용
  // for(const fruit of fruits){
  //   console.log(fruit)
  // }

// 43번. 배열의 특정 원소의 인덱스를 찾는 코드를 작성하세요.
  // 1.indexOf()-> 특정 원소가 없을 경우 -> '-1'을 반환한다.
  // console.log(fruits.indexOf("apple"))

  // 2. findIndex()-> 콜백함수로 조건을 설정해줌
  // 단일매개변수만 받는다. 
  // 틀린예제) console.log(fruits.findIndex(function(fruit,fruit2){fruit==="apple", fruit2 ==="cherry"}))
  // 요약하면, indexOf()는 값을 기준으로 찾고, findIndex()는 함수(콜백)를 기준으로 찾습니다. findIndex()은 좀 더 유연하게 원하는 조건을 설정할 수 있으며, 값이 아닌 특정 조건을 기반으로 원소를 찾고자 할 때 유용합니다.

// 44번. 두 수를 더하는 함수를 선언하는 코드를 작성하세요.
  // function addNumbers(a, b) {
  //   return a + b;
  // }

// 45번. 함수표현식과 함수 선언식의 차이점을 설명하세요.
  // 함수선언식: 함수를 선언-> 1급객체라 어디서든 호출이 가능하다.

  // 함수표현식: 변수에 함수를 할당 -> 변수 선언 이후에만 함수를 호출할 수 있다.

  // 요약) 기본적으로 함수 표현식을 사용하면 변수 스코프 내에서만 함수에 접근할 수 있으므로 코드 더욱 모듈화되고 예측 가능해집니다. 함수 선언식은 호이스팅으로 인해 어떤 부분에서든 함수를 호출할 수 있지만 코드를 이해하기 어려울 수 있으므로 함수 표현식이 코드 구조를 더 명확하게 만들 수 있습니다.
  
// 46번. 화살표 함수를 사용해 두 수를 곱하는 함수를 선언하는 코드를 작성하세요.
  // const multiply= (a,b)=>{console.log(a*b)}
  // 변수에 함수를 할당함.

// 47번. 콜백함수를 사용하는 코드를 작성하세요.
  // ex1)
  // function performAction(callback) {
  //   callback('Hello, World!');
  // }

  // performAction(function(param) {
  //   console.log('콜백 함수 호출: ' + param);
  // });
  // ex2)
 

// 48번. 클로저에 대해 설명하고 예를 들어보세요.
  // 클로저(Closure)는 JavaScript에서 중요하고 강력한 개념 중 하나로, 함수가 자신을 둘러싼 스코프(lexical environment)에서 외부 변수를 참조할 수 있는 능력을 가리킵니다. 클로저는 함수와 그 함수 내에서 정의된 변수로 구성됩니다. 이 함수 내에서 정의된 변수는 함수의 실행이 완료된 후에도 그 값을 유지합니다.
  // 클로저는 비동기 작업, 데이터 캡슐화, 정보 은닉 및 함수 팩토리 같은 상황에서 유용하게 활용됩니다.

// 49번. 함수 매개변수 기본값을 설정하는 코드를 작성하세요.
  // function greet(name = 'Guest', name2 = '어서오세요') {
  //   console.log(`Hello, ${name}!`);
  //   console.log(`${name2}`)
  // }

  // greet(); // "Hello, Guest!" 출력
  // greet('Alice'); // "Hello, Alice!" 출력

// 50번. 비어있는 클래스를 선언하는 코드를 작성하세요.
  // class EmptyClass {
    // //클래스 내용이 비어있음
  // }

// 51번. 생성자를 가진 클래스를 선언하는 코드를 작성하세요.
  // class kdtmember {
  //   constructor(name, age){
  //     this.이름 = name
  //     this.나이 = age
  //   }
  //   introduce(){
  //     console.log(`안녕 나는 ${this.이름}이라 해. 나이는 ${this.나이}야.`)
  //   }
  // }

  // const hong = new kdtmember("hongmoongi", 30)
  // console.log(hong)
  // hong.introduce()

  // const yoon = new kdtmember("yoonjunhyun", 28)
  // console.log(yoon)
  // yoon.introduce()

// 52번. 메서드를 가진 클래스를 선언하는 코드를 작성하세요.
  // class Person {
    // constructor(name) {
      // this.name = name;
    // }
  // 
    // sayHello() {
      // console.log(`Hello, my name is ${this.name}.`);
    // }
  // }
  // 
  // //클래스 인스턴스 생성
  // const person1 = new Person('Alice');
  // const person2 = new Person('Bob');

  // class calculator {
  //   constructor(number1,number2){
  //     this.add = function(number1,number2){
  //       return number1+number2}
  //     this.minus = function(number1,number2){
  //       return number1-number2}
  //    }
  // }
 
  // class city{
  //   constructor(si, gu, dong, 집주소 ){
  //     this.시 = si
  //     this.구 = gu
  //     this.동 = dong
  //     this.내집주소 = function (){
  //       console.log(`문기의 ${집주소}`)
  //     }
      
  //   }
  // }

  // const daejeon = new city("대전광역시", "서구", "둔산동", "국화아파트 202동 1106호")
  // console.log(daejeon)
  // const seoul = new city("서울특별시", "강서구", "목동","대원칸타빌 202동1106호")
  // console.log(seoul.동)
  // seoul.내집주소()

  // class city2{
  //   constructor(si, gu, dong){
  //     this.시 = si
  //     this.구 = gu
  //     this.동 = dong
  //     this.내집주소 = function (func1,func2,func3){
  //       return `${func1}에서 사는 ${func2} 라고 해. 만나서반가워. 내가하고싶은말은${func3}`
  //     }      
  //   }
  // }

  // const moongi = new city2("대전광역시","서구","만년동")
  // console.log(moongi.내집주소("오피스텔","홍문기","꺼져"))

// 53번. get과 set 접근자에 대해 설명하고 사용 예를 들어보세요.
  // get과 set은 JavaScript에서 객체의 속성에 접근하고 값을 설정하는 메커니즘입니다. 이를 통해 속성에 대한 읽기 및 쓰기 동작을 미세하게 제어할 수 있습니다. 
  // get은 속성 값을 읽을 때 호출되고, set은 속성 값을 설정할 때 호출됩니다.
  
  // // get사용 예시)
  // class Circle {
  //   constructor(radius) {
  //     this.radius = radius;
  //   }
  
  //   // 반지름 값을 읽을 때 호출되는 get 접근자
  //   get __radius() {
  //     return this.radius+55;
  //   }
  // }
  
  // const myCircle = new Circle(5);
  
  // // get 접근자를 사용하여 반지름 값 읽기
  // console.log(myCircle.radius); // 출력: 5
  // console.log(myCircle.__radius); // 출력: 5

  // class Temperature {
  //   constructor(celsius) {
  //     this.celsius = celsius;
  //   }
  
  //   // get 접근자를 사용하여 섭씨를 화씨로 변환
  //   get fahrenheit() {
  //     return (this.celsius * 9/5) + 32;
  //   }

  //   set fahrenheit(value) {
  //     this.celsius = (value - 32) * 5/9;
  //   }
  // }

  // // const temp = new Temperature(20)
  // // console.log(temp.celsius)
  // // console.log(temp.fahrenheit)

  // // temp.fahrenheit = 100
  // // console.log(temp.celsius)
  
  // const temp2 = new Temperature()
  // temp2.fahrenheit = 100
  // console.log(temp2.celsius)

// 54번. 클래스의 instance를 생성하는 코드를 작성하세요.
  // 생성자 함수로 만들어진 것을 인스턴스라함.
  // 생성자 함수로 여러개 만들었을 시 이름에 따라서
  // 인스턴스 "", 인스턴스"" 식으로 부르면됨.

// 55번. 모듈을 만들고 그것을 내보내는 코드를 작성하세요.
  // Html에서 모듈을 사용하려면 <script type="module">을 사용해야 된다.
  // esm방식
    // export "변수이름" or export "함수이름"
    // export {"변수이름", "함수이름"}
    // import {"변수이름", "함수이름"} from 가져오는 모듈파일의경로/모듀파일이름

  // cjs방식
    // module.exports {"변수이름", "함수이름"}
    // const {"변수이름". "함수이름"} 
    // = require ("경로/모듈파일")

// 56번. 모듈에서 함수를 하나 내보내는 코드를 작성하세요.
// 57번. 모듈에서 함수를 임포트하는 코드를 작성하세요.

// 58번. 모듈에서 여러개의 항목을 내보내는 코드를 작성하세요.
  // 디스트럭쳐링 개념을 사용해 export {함수 or 변수} -> JavaScript에서 객체나 배열을 분해하고 원하는 값들을 추출하여 변수에 할당하는 기술입니다.

  // const numbers = [1, 2, 3];
  // const [first, second, third] = numbers;

  // console.log(first);  // 출력: 1
  // console.log(second); // 출력: 2
  // console.log(third);  // 출력: 3