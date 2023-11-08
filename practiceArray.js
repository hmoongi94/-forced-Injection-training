const testArray = ["안녕", "나는", "홍문기야","좀더", "긴","배열",1,2,3,4,5]
const testArray2 = ["안녕","나는", "새로온 학생이야"]

// * 삭제: pop(마지막요소에 삭제) <-> shift(첫번째요소)
// * 추가: push(마지막요소에 추가) <-> unshift(첫번째요소)
// * 삭제하는 메서드들은 삭제한 값을 반환하는데 반해, 추가하는 메서드는 배열의 길이를 반환한다. push, unshift // pop, shift식으로 추가 삭제로 외우는 것이 더 편할 수도. 

// * slice(start,end) -> 원하는 부분을 추출해서 배열로 새롭게 만들어줌. start,end는 배열의 인덱스 값을 받고 마지막 end는 들어가지 않는것을 주의.
// * splice(start,deleteCount,item1,item2,...)는 원래 배열을 바꾸는 용도. 일부분을 삭제하거나 교체해줌. deleteCount를 0하면 원하는 자리에 추가만 할 수 있다.

// * concat(): 두 배열을 합치기. 새로운 배열 추가.
// * join(): 배열을 하나의 문자열로 만들기. -> 새 배열이 나오거나 배열이 변환되지는 않음.

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
  // * 