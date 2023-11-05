//61번. Date 객체를 사용해 현재 시간을 출력하는 코드를 작성하세요.
  // const currentdate = new Date();
  // console.log(currentdate)

//62번. Json 객체를 사용해 객체를 JSON 문자열로 변환하는 코드를 작성하세요.
  // JavaScript 객체 생성
    // const person = {
      // firstName: "John",
      // lastName: "Doe",
      // age: 30,
      // email: "john.doe@example.com"
    // };
    // console.log(person)
  // JavaScript 객체를 JSON 문자열로 변환
    // const jsonString = JSON.stringify(person);
    // console.log(jsonString);

//63번. Json객체를 사용해 JSON 문자열을 객체로 변환하는 코드를 작성하세요.
  // const person = JSON.parse(jsonString)

//64번. Set 객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성하세요.
  // const uniqueNumbers = new Set();
  // uniqueNumbers.add(5)
  // console.log(uniqueNumbers)
  // uniqueNumbers.add(10)
  // console.log(uniqueNumbers)
  // uniqueNumbers.add(5)
  // console.log(uniqueNumbers)

//65번. Map객체를 사용해 키-값 쌍의 컬렉션을 생성하는 코드를 작성하세요.
  // // 빈 Map 객체 생성
  // const personInfo = new Map();

  // // 키-값 쌍 추가
  // personInfo.set('firstName', 'John');
  // personInfo.set('firstName', 'hong')
  // personInfo.set('lastName', 'Doe');
  // personInfo.set('age', 30);

  // // Map 객체 내용 확인
  // console.log(personInfo);
  // // 특정 키를 사용하여 값을 가져오기
  // const firstName = personInfo.get('firstName');
  // console.log(firstName);
  // // Map 객체에서 키-값 쌍 제거
  // personInfo.delete('age');
  // console.log(personInfo);

//66번. 동기와 비동기에 대해 비유를 들어 차이점을 설명하세요.

  // 비유: 레스토랑에서 주문하기
  // 
  // 동기 (Synchronous):
  // 상황: 레스토랑에서 주문한 음식을 기다리는 고객
  // 설명: 고객은 주문한 음식을 주문하는 즉시 기다려야 합니다. 주문한 음식이 준비될 때까지 다른 일을 하거나 대화를 나누기 어려워요. 음식이 나오기 전까지 대기해야 합니다. 이것이 동기적인 동작과 유사합니다.
  // 
  // 비동기 (Asynchronous):
  // 상황: 레스토랑에서 주문하고 나서 다른 고객과 대화하거나 책을 읽는 고객
  // 설명: 고객은 주문을 한 후에 주문한 음식이 준비될 때까지 다른 일을 할 수 있습니다. 주문한 음식이 준비되면 고객에게 알림이 오고 음식을 수령합니다. 고객은 주문한 작업(음식 준비)이 완료될 때까지 다른 작업을 수행할 수 있으며, 이것이 비동기적인 동작과 유사합니다.
  // 
  // 비동기 프로그래밍은 일반적으로 네트워크 요청, 파일 읽기/쓰기, 타이머 이벤트 등과 같은 작업을 다룰 때 유용하며, 애플리케이션의 응답성을 향상시키고 블로킹을 피하기 위해 사용됩니다.
  
//67번. setTimeout을 사용해 1초 후에 ' hello,world!'를 출력하는 코들르 작성하세요.
  // setTimeout(function() {
    // console.log('Hello, World!');
  // }, 1000); // 1000 밀리초 (1초) 후에 함수를 실행
