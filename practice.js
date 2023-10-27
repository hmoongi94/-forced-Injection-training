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