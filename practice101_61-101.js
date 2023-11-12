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
    
    //68번. promise를 선언하고 사용하는 코드를 작성하세요.
    // // Promise 생성
    //   const myPromise = new Promise((resolve, reject) => {
      //     // 비동기 작업을 수행
      //     setTimeout(() => {
        //       const randomNumber = Math.random();
        //       if (randomNumber < 0.5) {
          //         resolve(`Success: ${randomNumber}`); //fullfilled상태
          
          //       } else {
            //         reject(`Error: ${randomNumber}`); // rejected 상태 
            //       }
            //     }, 1000);
            //   });
            
            // // Promise 사용
            //   myPromise
            //     .then((result) => {
              //       console.log(result); // 성공적으로 해결될 경우 실행 //fullfilled상태일 때 실행됨.
              //     })
              //     .catch((error) => {
                //       console.error(error); // 실패 또는 오류 발생 시 실행 // rejected 상태일 때 실행됨.
                //     });
                
                
//69번. promise가 해결(fullfilled,resolved)되거나 거부된 경우를 제작하세요.

  // pending: 초기 상태, 아직 결과가 결정되지 않음.
  // fulfilled (또는 resolved): resolve 함수가 호출되고 해당 함수에 전달된 값이 성공적으로 처리될 때 발생합니다. 이 값은 .then() 메서드에 전달된 콜백 함수의 인자로 전달됩니다.
  // rejected: reject 함수가 호출되고 해당 함수에 전달된 값이 실패할 때 발생합니다. 이 값은 .catch() 메서드에 전달된 콜백 함수의 인자로 전달됩니다.

//70번. javaScript에서 프로미스 체인을 구현하는 코드를 작성해보세요.
  // function asyncTask1() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 1 completed');
      // }, 1000);
    // });
  // }
  // 
  // function asyncTask2() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 2 completed');
      // }, 1500);
    // });
  // }
  // 
  // function asyncTask3() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 3 completed');
      // }, 500);
    // });
  // }
  // 
  // //프로미스 체인 구현
  // asyncTask1()
    // .then((result) => {
      // console.log(result);
      // return asyncTask2();
    // })
    // .then((result) => {
      // console.log(result);
      // return asyncTask3();
    // })
    // .then((result) => {
      // console.log(result);
      // console.log('All tasks completed');
    // })
    // .catch((error) => {
      // console.error('Error:', error);
    // });

//71번. async/await를 사용해 비동기 코드를 처리하는 목적을 설명하세요.
  // async/await는 비동기 코드를 처리하고 관리하는 목적을 달성하는데 사용되는 JavaScript의 기능입니다. 아래는 async/await의 목적과 장점을 설명한 것입니다:

  // 1. 비동기 코드를 동기 코드처럼 작성: async/await를 사용하면 비동기 코드를 동기 코드와 유사한 구문으로 작성할 수 있습니다. 이렇게 하면 코드가 더 읽기 쉽고 이해하기 쉽게 됩니다. 비동기 코드를 연속적으로 실행하는 것처럼 보이며 콜백 지옥(callback hell)을 피할 수 있습니다.

  // 2. 에러 처리 용이성: async/await는 에러 처리를 간편하게 만듭니다. try...catch 블록 내에서 비동기 코드를 실행하고 오류가 발생하면 catch 블록에서 오류를 처리할 수 있습니다.

  // 3. 비동기 코드의 순서 제어: async/await를 사용하면 비동기 작업의 순서를 명확하게 제어할 수 있습니다. await 키워드를 사용하여 특정 비동기 작업이 완료될 때까지 기다릴 수 있으며, 그 다음 작업을 실행할 수 있습니다.

  // 4. 코드 가독성 향상: async/await를 사용하면 콜백 함수 대신 비동기 코드를 선형적으로 구성할 수 있으므로 코드의 가독성이 향상됩니다.

  // 5. 병렬 처리 및 복잡한 비동기 패턴 관리: 여러 개의 비동기 작업을 병렬로 처리하거나 복잡한 비동기 패턴을 관리하는 것이 훨씬 쉽습니다. Promise.all과 함께 사용하여 병렬 처리도 가능합니다.

  // 6. 예를 들어, 웹 요청, 파일 I/O, 데이터베이스 쿼리와 같은 비동기 작업을 처리하거나 다양한 서비스와 상호 작용할 때 async/await를 사용하면 코드를 더 효과적으로 관리할 수 있습니다.

// 72번. async/await와 promise의 차이점을 설명하세요.
  // async/await와 Promise는 JavaScript에서 비동기 코드를 처리하는 데 사용되는 두 가지 다른 기술입니다. 아래는 async/await와 Promise의 주요 차이점을 설명한 것입니다:
  // 
  // 1.구문과 가독성:
  // Promise: Promise는 .then() 및 .catch() 메서드를 사용하여 비동기 코드를 다룹니다. 이러한 메서드를 사용하면 코드가 좀 더 명시적이 되지만, 중첩된 .then() 호출로 인해 "콜백 지옥" 문제가 발생할 수 있습니다.
  // async/await: async/await를 사용하면 비동기 코드를 동기 코드와 유사한 구문으로 작성할 수 있으므로 코드의 가독성이 향상됩니다. await 키워드를 사용하여 비동기 작업의 완료를 기다리는 것이 가능하며, try...catch 블록을 사용하여 에러 처리가 간편해집니다.
  // 2.에러 처리:
  // Promise: 에러 처리를 위해 .catch() 메서드를 사용하거나 .then() 메서드 체인 내에서 에러 처리를 직접 구현해야 합니다.
  // async/await: try...catch 블록 내에서 에러 처리가 가능하며, 코드가 더 명확하게 에러를 처리할 수 있습니다.
  // 3. 순서 제어:
  // Promise: .then() 메서드를 사용하여 비동기 작업의 순서를 제어할 수 있으며, Promise.all과 같은 메서드를 사용하여 병렬 작업을 처리할 수 있습니다.
  // async/await: await 키워드를 사용하여 특정 비동기 작업이 완료될 때까지 기다릴 수 있으며, 코드가 비동기 작업을 순차적으로 처리하는 것처럼 보입니다.
  // 4. 중첩과 복잡성:
  // Promise: 비동기 코드를 중첩하면 가독성이 떨어질 수 있고 "콜백 지옥"이 발생할 수 있습니다.
  // async/await: async/await를 사용하면 중첩을 피하고 코드를 더 선형적으로 유지할 수 있습니다.

  // 5.비동기 함수 반환 값:
  // Promise: Promise 객체를 반환하는 함수의 결과를 다루려면 .then() 메서드를 사용해야 합니다.
  // async/await: async 함수는 비동기 작업이 완료되면 해당 값을 반환하므로 동기적인 방식으로 값을 다루는 것처럼 보입니다.

  // 보편적으로, async/await는 비동기 코드를 더 읽기 쉽고 관리하기 쉽게 만들며, 에러 처리와 코드 구조를 개선하는 데 도움이 됩니다. 그러나 async/await를 사용할 수 없는 환경에서나 기존 코드와 통합할 때 Promise도 여전히 유용할 수 있습니다.

//73. promise.all을 사용해 여러 promise를 동시에 실행하는 코드를 작성해보세요.

  // function fetchUserData(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션 (예: 네트워크 요청)
  //     setTimeout(() => {
  //       resolve(`User data for ID ${userId}`);
  //     }, 1000);
  //   });
  // }

  // function fetchUserPosts(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션 (예: 데이터베이스 쿼리)
  //     setTimeout(() => {
  //       resolve(`Posts for User ID ${userId}`);
  //     }, 1500);
  //   });
  // }

  // function fetchUserComments(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션
  //     setTimeout(() => {
  //       resolve(`Comments for User ID ${userId}`);
  //     }, 800);
  //   });
  // }

  // const userId = 123;

  // // Promise.all을 사용하여 여러 Promise를 동시에 실행
  // Promise.all([
  //   fetchUserData(userId),
  //   fetchUserPosts(userId),
  //   fetchUserComments(userId)
  // ])
  //   .then((results) => {
  //     // 모든 Promise가 완료되었을 때 결과를 처리
  //     const [userData, userPosts, userComments] = results;
  //     console.log(userData);
  //     console.log(userPosts);
  //     console.log(userComments);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });

// 74번. 비동기 함수에서 예외를 처리하는 방법을 설명하고 예를 들어보세요.
  // async function fetchData() {
    // try {
      // const response = await fetch('https://example.com/api/data');
      // 
      // if (!response.ok) {
        // throw new Error('Failed to fetch data');
      // }
      // 
      // const data = await response.json();
      // 
      // return data;
    // } catch (error) {
      // console.error('An error occurred:', error);
      // return null;
    // }
  // }
  // 

  // //fetchData 함수 호출
  // fetchData()
    // .then((data) => {
      // if (data) {
        // console.log('Data:', data);
      // } else {
        // console.log('No data available.');
      // }
    // })
    // .catch((error) => {
      // console.error('Unhandled error:', error);
    // });

// 75번. proxy객체를 생성하는 코드를 작성해보세요.
  // proxy 객체는 다른 객체에 대한 가상화 프록시를 만드는데 사용함. 이를 통해 객체의 기본동작을 수정하거나 확장할 수 있습니다.

  //기본예시
  //대상 객체 (target object)생성
  const targetObject = {
    name: Hong,
    age: 30
  }

  // proxy 객체 생성
  const proxyObject = new Proxy(targetObject,{
    //get 헨들러: 속성에 접근할 때 실행되는 동작 정의
    get: function(target, property, receiver){
      console.log(`Getting ${property} value`);
      // 실제 속성값 반환
      return target[property];
    },
    // set 핸들러: 속성에 값을 할당할 때 실행되는 동작 정의
    set: function(target, property, value, receiver){
      console.log(`setting ${property} to ${value}`)
      // 실제 속성값 할당
      target[property] = value;
      return true
    }
  })

  // 