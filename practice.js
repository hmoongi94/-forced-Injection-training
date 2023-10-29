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
for(i=1; i<=10; i++){
  console.log(i)
}

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