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
  // 빈 Map 객체 생성
  const personInfo = new Map();

  // 키-값 쌍 추가
  personInfo.set('firstName', 'John');
  personInfo.set('firstName', 'hong')
  personInfo.set('lastName', 'Doe');
  personInfo.set('age', 30);

  // Map 객체 내용 확인
  console.log(personInfo);
  // 특정 키를 사용하여 값을 가져오기
  const firstName = personInfo.get('firstName');
  console.log(firstName);
  // Map 객체에서 키-값 쌍 제거
  personInfo.delete('age');
  console.log(personInfo);