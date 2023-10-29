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

// 26번 