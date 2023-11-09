const testArray = ["안녕", "나는", "홍문기야","좀더", "긴","배열",1,2,3,4,5]
const testArray2 = ["안녕","나는", "새로온 학생이야"]
const testNumbers = [1,2,3,4,5,6,7,8,9]

// * 삭제: pop(마지막요소에 삭제) <-> shift(첫번째요소)
// * 추가: push(마지막요소에 추가) <-> unshift(첫번째요소)
// * 삭제하는 메서드들은 삭제한 값을 반환하는데 반해, 추가하는 메서드는 배열의 길이를 반환한다. push, unshift // pop, shift식으로 추가 삭제로 외우는 것이 더 편할 수도. 

// * slice(start,end) -> 원하는 부분을 추출해서 배열로 새롭게 만들어줌. start,end는 배열의 인덱스 값을 받고 마지막 end는 들어가지 않는것을 주의.
// * splice(start,deleteCount,item1,item2,...)는 원래 배열을 바꾸는 용도. 일부분을 삭제하거나 교체해줌. deleteCount를 0하면 원하는 자리에 추가만 할 수 있다.

// * concat(): 두 배열을 합치기. 새로운 배열 추가.
// * join(): 배열을 하나의 문자열로 만들기. -> 새 배열이 나오거나 배열이 변환되지는 않음.

// * reverse(): 배열을 반환-> 원래배열 바뀜
// * sort(): 배열을 정렬-> 원래배열 바뀜

// * indexOf(searchElement,[fromIndex]): 배열에서 요소의 인덱스 값을 구한다. 배열의 요소가 없는 경우 -1을 반환한다.
// * lastindexOf:뒤에서부터 찾기 시작함. indexof와 lastindexof둘다 먼저 발견한 것에 인덱스를 알려줌

//* find()메서드는 콜백함수를 사용해서 함수에 원하는 값의 조건을 넣어준다. 조건에 맞는 첫번째 값이 반환된다.
//* findIndex()는 원하는 값의 조건에 맞는 첫번째 인덱스 를 반환.

//* filter()는 배열에서 맞는 조건들을 뽑아서 새 배열을 만듬.
//* map()은 배열에서 맞는 조건들로 배열을 변환시켜준다. 새배열을 만들지만 원래 있던 배열의 요소들은 전부 그대로 있다. 거기서 함수 조건에 맞는 것들만 값이 변환
//* forEach()는 배열의 요소마다 일일히 함수를 실행시킬 뿐이지. 값을 반환하지는 않는다.

//*some()메서드는 조건에 맞는것이 있는지 찾는다. true, false로 반환. return을 주지 않을시 false를 반환하므로 주의.
//*every()메서드랑 some()메서드를 구분하자
//*every()는 모두 조건이 맞아야지 true, some()은 하나만 맞아도 true
//*마찬가지로 return을 반환해줘야 true값을 반환함. return값이 없으면 undefined로 false를 반환한다.



// ? 1. 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?
  //* push메서드: 배열의 끝에 요소추가하고 길이를 알려줌.
  //* 스프레드연산자("...")
  
  // console.log(testArray.push(...pushingArray))
  // console.log(testArray)

// ? 2. 배열에서 마지막 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?
  //* pop메서드: 마지막 요소를 제거하고 반환함.
  // console.log(testArray.pop())
  // console.log(testArray)

// ? 3. 배열에서 첫 번째 요소를 제거하고 그 요소를 반환하는 메서드는 무엇인가요?
  //* shift메서드: 첫 번째 요소 제거 후, 반환
  // console.log(testArray.shift())
  // console.log(testArray)

// ? 4. 배열의 시작에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환하는 메서드는 무엇인가요?
  //* unshift메서드: 첫번째 요소 추가
  // console.log(testArray.unshift(pushingArray))
  // console.log(testArray)

// ? 5. 배열의 일부를 얕은 복사본으로 추출하고 새로운 배열 객체로 반환하는 메서드는 무엇인가요?
  //* slice메서드: slice(start,end) -> 원하는 부분을 지정
  //* end부분은 지정이 안됨.
  //* 추출해서 새로운 배열을 반환.
  //* 새로운 배열이 추출되는 거기 때문에 원래 배열은 변환이 안됨.
  // console.log(testArray.slice(0,5))
  // console.log(testArray)

// ? 6. 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경하는 메서드는 무엇인가요?
  // * splice메서드: splice(start,deleteCount,item1,item2,...)
  // * deleteCount를 0하면 원하는 자리에 추가만 할 수 있다.
  // console.log(testArray.splice(1,2,"추가","추가"))
  // console.log(testArray)

// ? 7. 두 개 이상의 배열을 결합하여 새 배열을 만드는 메서드는 무엇인가요?
  // * concat메서드: 새 배열을 추가한다. 두개의 원래 배열들은 변환되지 않는다.
  // console.log(testArray.concat(testArray2))
  // console.log(testArray)
  // console.log(testArray2)

// ? 8. 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드는 무엇인가요?
  // * join메서드: join(separator)
  // * separator은 붙이는데 사용하는 옵션임.
  // * testArray.join()은 testArray.join(",")인게 기본값임.
  // * path.join()에서 쓰는 join()메서드랑 array.join()메서드랑은 완전히 다른 메서드다.
  
  // console.log(testArray.join("&"))
  // console.log(testArray.join(","))

// ? 9. 배열의 순서를 반전시키는 메서드는 무엇인가요?
  // * reverse()메서드: 원래 배열도 바뀜.
  // console.log(testArray.reverse())
  // console.log(testArray)

// ? 10. 배열의 요소를 적절한 위치에 정렬하는 메서드는 무엇인가요?
  // * sort()메서드: 알파벳이나 숫자를 정렬해주고 원래 배열도 바뀜.
  // * sort((a,b)=> a-b) -> 오름차순
  // * sort((a,b)=> b-a) -> 내림차순
  // const alphabet = ['s','d','f','a','q','w','e','r','t']
  // const numbers = [2,4,7,9,1,3,5,6]
  // const korean = ['막','방','강','나','라','다']

  // console.log(korean.sort())

// ? 11. 배열에서 지정된 요소를 찾고, 그 인덱스를 반환하는 메서드는 무엇인가요?
  //* indexOf()메서드: array.indexOf(searchElement[fromIndex])
  //* searchElement[,fromIndex]는 옵션사항이며 어디부터 검색할것인지 설정할 수 있다. 기본값은 0이다.
  //* 중복된 값이 있을 경우: 첫번째로 발견한 위치를 알려줌
  // console.log(testArray.indexOf('나는'[5]))

// ? 12. 배열에서 지정된 요소를 뒤에서부터 찾고, 그 인덱스를 반환하는 메서드는 무엇인가요?
  // * lastIndexOf()메서드: 
  // * 중복된 값이 있을 경우: 처음으로 발견한 위치를 알려주는데 뒤에서부터 찾기 시작하므로 배열에서는 뒤쪽에 있는 배열을 알려줌?
  
  // const numbers = [ 1,2,3,4,5,6,7,8,9,5,4,3,2,3,4,5,6]
  // console.log(numbers.indexOf(4))
  // console.log(numbers.lastIndexOf(4,[13]))
  
  // ? 13. 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소의 값을 반환하는 메서드는 무엇인가요?
  //* find()메서드: array.find(callback(element[,index[,array]])[,thisArg])
  //* find()메서드는 콜백함수로 찾는 값을 함수로 정의한다.
  //* 하지만 간단하게 원하는 값을 찾으려면
  //* const foundValue = numbers.find(element => element === targetValue);
  //* 이런식으로 간단하게 요소조건을 추가한다.

  //? 14. 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하는 메서드는 무엇인가요?
  //* findIndex()메서드: find()메서드는 원하는 조건의 배열의 값이 나오고 findIndex는 배열의 인덱스가 나옴.

  //? 15. 테스트 함수를 통과하는 모든 요소를 모아 새 배열로 반환하는 메서드는 무엇인가요?
  //* filter()메서드: 조건의 모든 요소들을 모아 새 배열로 만듬.

  //? 16. 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새 배열로 반환하는 메서드는 무엇인가요?
  //* map(callback)메서드: 배열을 조건에 따라서 바꾸어줄 수 있다.

  // const numbers=[1,2,3,4,5,6,7,8,9]
  // const squaredNumbers = numbers.map((element,index)=>{
  //   if(index>=2){
  //   return element*element
  // }
  // return element
  // })
  // console.log(squaredNumbers)

  //? 17. 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드는 무엇인가요?
  //*forEach()메서드는 값을 반환하지 않고 그 요소가 실행될 때 어떤 동작을 수행하려고 사용함. 조건에 맞는 배열을 뽑고 싶으면 filter()를 사용.

  //   const fruits = ['사과','바나나','수박','메론','오렌지']
  //   const foreachTest =fruits.forEach((element,index)=>{
  //     if (element === '수박' || index >= 3) {
  //       return true; // 찾았으면 true 반환
  //     }
  //     return false; // 찾지 못했으면 false 반환
    
  // })
  // console.log(foreachTest)

  //? 18. 배열의 어떤 요소라도 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 무엇인가요?
  //* some()메서드: 조건을 만족하면 true반환, 아닐시 false반환
  //* return을 안주면 값을 false로 반환한다.
  // console.log(testArray.some((element)=>{
  //   return element=== "안녕"
  // }))
  
  //? 19. 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 테스트하는 메서드는 무엇인가요?
  //* every():조건이 모두 만족해야지 true, 하나라도 틀리면 false
  //* some()과 구분하자.
  //* 숫자들 조건을 할 때 많이 쓸 것 같다.

  // console.log(testArray.every((element)=>{
  //   return element==="안녕"
  // }))

  const even = [2,4,6,8]
  const arealleven = even.every((element)=>{
    return element%2 ===0
  })
  console.log(arealleven)

  //* 13~15번 테스트
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const isEven = (element) => element % 2 === 0;
  // const findOptions = {
  //   thisArg: null, // `this`로 사용할 값 (null로 설정)
  // };

  // const firstEvenIndex = numbers.filter(
  // function (element, index, array) {
  //   // `this`를 사용하려면 `findOptions`에 `thisArg` 값을 설정해야 함
  //   // console.log(`현재 요소: ${element}`);
  //   // console.log(`현재 요소의 인덱스: ${index}`);
  //   // console.log(`배열 전체: ${array}`);
  //     if (this === null) {
  //       console.log('`this` is null');
  //     }
    
  //     // 테스트 함수: 짝수를 찾아 첫 번째 짝수의 인덱스 반환
  //     return isEven(element);
  //   },
  //   findOptions
  // );

  // console.log(numbers)
  // console.log(firstEvenIndex); // 1 (첫 번째 짝수의 인덱스)
  